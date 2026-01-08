import mongoose, { Schema, HydratedDocument } from 'mongoose';

interface Room {
	name: string;
	imageUrl?: string;
}

const roomSchema = new Schema<Room>(
	{
		name: {
			type: String,
			required: [true, "El nombre de la sala es obligatoria"]
		},
		imageUrl: {
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

