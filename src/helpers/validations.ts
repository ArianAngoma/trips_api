export const validateLatitude = (latitude: number): boolean => {
  return isFinite(latitude) && Math.abs(latitude) <= 90;
};

export const validateLongitude = (longitude: number): boolean => {
  return isFinite(longitude) && Math.abs(longitude) <= 180;
};
