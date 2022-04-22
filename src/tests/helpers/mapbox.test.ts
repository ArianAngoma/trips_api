import {getAddress, getDistance} from '../../helpers/mapbox';
import {readings} from '../data/data';

describe('Test on the functions used by the mapbox api', () => {
  test('Should return the address correctly', async () => {
    const addressStart = await getAddress(
        readings[2].location.lat,
        readings[2].location.lon,
    );
    // eslint-disable-next-line max-len
    expect(addressStart).toBe('San Fermin 3186, Puente Alto, Santiago Metropolitan 8150000, Chile');

    const addressEnd = await getAddress(
        readings[7].location.lat,
        readings[7].location.lon,
    );
    // eslint-disable-next-line max-len
    expect(addressEnd).toBe('El Penon 1130, Puente Alto, Santiago Metropolitan 8150000, Chile');
  });

  test('Should return the distance between two points correctly', async () => {
    const totalDistance = await getDistance(
        readings[2].location.lat,
        readings[2].location.lon,
        readings[7].location.lat,
        readings[7].location.lon,
    );
    expect(typeof totalDistance).toBe('number');
    expect(totalDistance).toBe(293);
  });
});
