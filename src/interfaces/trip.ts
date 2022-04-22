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

export type IStructTrip = Omit<ITrip, 'id'>

export interface IFilterTrip {
  start_gte: number;
  start_lte: number;
  distance_gte: number;
}

export interface IPaginationTrip {
  limit: number;
  offset: number;
}
