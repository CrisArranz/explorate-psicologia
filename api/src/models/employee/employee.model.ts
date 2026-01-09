import bcrypt from 'bcryptjs';
import mongoose, { Schema, HydratedDocument } from 'mongoose';

interface Employee {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	logoUrl?: string;
	isAdmin: boolean;
}

interface EmployeeMethods {
	comparePassword(candidatePassword: string): Promise<boolean>;
}

const employeeSchema = new Schema<Employee, mongoose.Model<Employee, {}, EmployeeMethods>, EmployeeMethods>(
	{
		email: {
			type: String,
			unique: true,
			required: [true, "El correo es obligatorio"],
			match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un correo válido'],
			lowercase: true,
			trim: true,
		},
		firstName: {
			type: String,
			required: [true, "El nombre es obligatorio"]
		},
		lastName: {
			type: String,
			required: [true, "El apellido es obligatorio"]
		},
		password: {
			type: String,
			required: [true, "La contraseña es obligatoria"],
			select: false
		},
		logoUrl: {
			type: String,
			default: "",
			validate: {
				validator: function (image: string) {
					try {
						new URL(image);
						return true;
					} catch (_) {
						return false;
					}
				}
			}

		},
		isAdmin: {
			type: Boolean,
			default: false
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (doc, ret) => {
				const { password, __v, _id, ...rest } = ret;

				return rest;
			}
		}
	}
);

employeeSchema.virtual('booking', {
	ref: 'Booking',
	localField: '_id',
	foreignField: 'employee'
})

employeeSchema.pre('save', async function (this: HydratedDocument<Employee>) {
	if (this.isModified('password')) {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
	}
});

employeeSchema.pre('findOneAndUpdate', async function () {
	const update = this.getUpdate() as any;

	if (!update?.password) return;

	const salt = await bcrypt.genSalt(10);
	update.password = await bcrypt.hash(update.password, salt);
});

employeeSchema.methods.comparePassword = async function (this: HydratedDocument<Employee>, candidatePassword: string): Promise<boolean> {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
}

export const EmployeeModel = mongoose.model<Employee, mongoose.Model<Employee, {}, EmployeeMethods>>('Employee', employeeSchema);

