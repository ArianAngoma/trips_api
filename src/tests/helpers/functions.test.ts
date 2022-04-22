import {
  getLatLonArray,
  getMaxReading,
  getMinReading, getOverspeedsCount,
  getTotalDuration,
} from '../../helpers/functions';
import {readings} from '../data/data';

describe('Test in the functions to generate a trip', () => {
  test('The min reading should be returned', () => {
    const reading = getMinReading(readings);
    expect(reading).toBe(readings[2]);
  });

  test('The max reading should be returned', () => {
    const reading = getMaxReading(readings);
    expect(reading).toBe(readings[7]);
  });

  test('Should return the duration correctly', () => {
    const totalDuration = getTotalDuration(readings);
    expect(typeof totalDuration).toBe('number');
    expect(totalDuration).toBe(36000);
  });

  test('Should return an array with all latitudes and longitudes.', () => {
    const boundingBox = getLatLonArray(readings);
    expect(typeof boundingBox).toBe('object');
    expect(boundingBox.length).toBe(10);
  });

  test('should return the overs speeds account', () => {
    const overspeedsCount = getOverspeedsCount(readings);
    expect(typeof overspeedsCount).toBe('number');
    expect(overspeedsCount).toBe(2);
  });
});
