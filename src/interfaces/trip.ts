import {IReadingResponse} from './reading';
import {IBoundingBox} from './boundingBox';

export interface ITrip {
  id: string;
  start: IReadingResponse;
  end: IReadingResponse;
  distance: number;
  duration: number;
  overspeedsCount: number;
  boundingBox: IBoundingBox[];
}
