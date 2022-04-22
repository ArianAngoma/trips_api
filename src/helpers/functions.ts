import {IBoundingBox, IReadingRequest} from '../interfaces';

export function getMinReading(readings: IReadingRequest[]): IReadingRequest {
  return readings.reduce((prev: IReadingRequest, curr: IReadingRequest) => {
    return prev.time < curr.time ? prev : curr;
  });
}

export function getMaxReading(readings: IReadingRequest[]): IReadingRequest {
  return readings.reduce((prev: IReadingRequest, curr: IReadingRequest) => {
    return prev.time > curr.time ? prev : curr;
  });
}

export function getTotalDuration(readings: IReadingRequest[]): number {
  const max = getMaxReading(readings);
  const min = getMinReading(readings);
  return max.time - min.time;
}

export function getLatLonArray(readings: IReadingRequest[]): IBoundingBox[] {
  return readings.map((reading: IReadingRequest) => {
    return {
      lat: reading.location.lat,
      lon: reading.location.lon,
    };
  });
}

export function getOverspeedsCount(readings: IReadingRequest[]): number {
  let overspeedsCount: number = 0;

  readings.forEach((reading: IReadingRequest, index: number) => {
    // eslint-disable-next-line max-len
    if ((reading.speed > reading.speedLimit) && !(readings[index + 1]?.speed > readings[index + 1]?.speedLimit)) {
      return overspeedsCount++;
    }
  });

  return overspeedsCount;
}
