import {Request, Response} from 'express';

import {IReadingRequest, IStructTrip} from '../interfaces';
import {
  getMinReading,
  getMaxReading,
  getTotalDuration, getLatLonArray, getOverspeedsCount,
} from '../helpers/functions';
import {getAddress, getDistance} from '../helpers/mapbox';
import {obtainTrips, saveTrip} from '../entities/trip';

export const getTrips = async (req: Request, res: Response) => {
  const {
    start_gte,
    start_lte,
    distance_gte,
    limit,
    offset,
  } = req.query;

  const trips = await obtainTrips(
      {
        start_gte: Number(start_gte),
        start_lte: Number(start_lte),
        distance_gte: Number(distance_gte),
      },
      {
        limit: Number(limit),
        offset: Number(offset),
      },
  );

  res.status(200).json({trips});
};

export const createTrip = async (req: Request, res: Response) => {
  const {readings}: { readings: IReadingRequest[] } = req.body;

  const startReading = getMinReading(readings);
  const endReading = getMaxReading(readings);
  const [
    totalDistance,
    addressStartReading,
    addressEndReading,
  ] = await Promise.all([
    getDistance(
        startReading.location.lat,
        startReading.location.lon,
        endReading.location.lat,
        endReading.location.lon,
    ),
    getAddress(
        startReading.location.lat,
        startReading.location.lon,
    ),
    getAddress(
        endReading.location.lat,
        endReading.location.lon,
    ),
  ]);
  const totalDuration = getTotalDuration(readings);
  const overspeedsCount = getOverspeedsCount(readings);
  const boundingBox = getLatLonArray(readings);

  const struct: IStructTrip = {
    start: {
      time: startReading.time,
      lat: startReading.location.lat,
      lon: startReading.location.lon,
      address: addressStartReading,
    },
    end: {
      time: endReading.time,
      lat: endReading.location.lat,
      lon: endReading.location.lon,
      address: addressEndReading,
    },
    distance: totalDistance,
    duration: totalDuration,
    overspeedsCount,
    boundingBox,
  };

  const trip = await saveTrip(struct);

  res.status(200).json(trip);
};
