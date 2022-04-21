import {IBoundingBox} from './boundingBox';
import {IReadingResponse} from './reading';

export interface ITrip {
  id: string;
  start: IReadingResponse;
  end: IReadingResponse;
  distance: number;
  duration: number;
  overspeedsCount: number;
  boundingBox: IBoundingBox[];
}
