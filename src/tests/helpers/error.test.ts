import {ERRORS} from '../../helpers/errors';

describe('Test in the error list', () => {
  test('Should have a list of errors', () => {
    expect(ERRORS).toHaveProperty('readings');
    expect(ERRORS.readings.srcMessage)
        .toBe('Must have at least 5 readings');

    expect(ERRORS).toHaveProperty('time');
    expect(ERRORS.time.srcMessage)
        .toBe('Time attribute is invalid');

    expect(ERRORS).toHaveProperty('speed');
    expect(ERRORS.speed.srcMessage)
        .toBe('Speed attribute is invalid');

    expect(ERRORS).toHaveProperty('speedLimit');
    expect(ERRORS.speedLimit.srcMessage)
        .toBe('Speed limit attribute is invalid');

    expect(ERRORS).toHaveProperty('lat');
    expect(ERRORS.lat.srcMessage)
        .toBe('Latitude attribute is invalid');

    expect(ERRORS).toHaveProperty('lon');
    expect(ERRORS.lon.srcMessage)
        .toBe('Longitude attribute is invalid');
  });
});
