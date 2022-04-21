import {model, Schema} from 'mongoose';

import {IBoundingBox, IReadingResponse, ITrip} from '../interfaces';

const ReadingSchema = new Schema<IReadingResponse>({
  time: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
}, {_id: false});

const BoundingBox = new Schema<IBoundingBox>({
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
}, {_id: false});

const TripSchema = new Schema<ITrip>({
  start: ReadingSchema,
  end: ReadingSchema,
  distance: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  overspeedsCount: {
    type: Number,
    required: true,
  },
  boundingBox: [BoundingBox],
});

TripSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id;
    delete returnObject._id;
    delete returnObject.__v;
  },
});

export default model<ITrip>('Trip', TripSchema);
