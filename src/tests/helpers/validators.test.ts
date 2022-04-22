import {validateLatitude, validateLongitude} from '../../helpers/validations';

describe('Tests on latitude validation', () => {
  test('Should return true', () => {
    const result = validateLatitude(-33.580158);
    expect(result).toBeTruthy();
  });

  test('Should return false', () => {
    const result = validateLatitude(Infinity);
    expect(result).toBeFalsy();
  });
});

describe('Tests on longitude validation', () => {
  test('Should return true', () => {
    const result = validateLongitude(-70.567227);
    expect(result).toBeTruthy();
  });

  test('Should return false', () => {
    const result = validateLongitude(Infinity);
    expect(result).toBeFalsy();
  });
});
