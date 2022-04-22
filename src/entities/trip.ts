import {IFilterTrip, IPaginationTrip, IStructTrip, ITrip} from '../interfaces';
import Trip from '../models/trip';

export const obtainTrips = async (
    filter: IFilterTrip,
    paginate: IPaginationTrip,
): Promise<ITrip[]> => {
  try {
    const filters: { [key: string]: any } = {};
    if (filter.distance_gte) {
      filters.distance = {$gte: filter.distance_gte};
    }

    if (filter.start_gte && filter.start_lte) {
      filters['start.time'] = {$gte: filter.start_gte, $lte: filter.start_lte};
    }

    if (filter.start_gte && !filter.start_lte) {
      filters['start.time'] = {$gte: filter.start_gte};
    }

    if (!filter.start_gte && filter.start_lte) {
      filters['start.time'] = {$lte: filter.start_lte};
    }

    return Trip.find(filters)
        .skip(paginate.offset)
        .limit(paginate.limit);
  } catch (error) {
    throw error;
  }
};

export const saveTrip = async (trip: IStructTrip): Promise<ITrip> => {
  try {
    return await Trip.create(trip);
  } catch (error) {
    throw error;
  }
};
