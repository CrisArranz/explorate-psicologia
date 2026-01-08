import mongoose, { Schema, HydratedDocument } from 'mongoose';

interface Room {
	booking: Schema.Types.ObjectId;
	employee: Schema.Types.ObjectId;
	room: Schema.Types.ObjectId;
	startTime: Date;
	endTime: Date;
}

const roomSchema = new Schema<Room>(
	{
		booking: {
			type: Schema.Types.ObjectId,
			required: [true, "El id de la reserva es obligatorio"],
			ref: "Booking"
		},
		employee: {
			type: Schema.Types.ObjectId,
			required: [true, "El id del empleado es obligatorio"],
			ref: "Employee"
		},
		room: {
			type: Schema.Types.ObjectId,
			required: [true, "El id de la sala es obligatorio"],
			ref: "Room"
		},
		startTime: {
			type: Date,
			required: [true, "La hora de inicio es obligatoria"]
		},
		endTime: {
			type: Date,
			required: [true, "La hora de fin es obligatoria"]
		}
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (doc, ret) => {
				const { __v, _id, ...rest } = ret;

				return rest;
			}
		}
	}
);

roomSchema.virtual('booking', {
	ref: 'Booking',
	localField: '_id',
	foreignField: 'room'
})

export const RoomModel = mongoose.model<Room>('Room', roomSchema);

