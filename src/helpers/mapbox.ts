import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getAddress = (
    lat: number,
    lon: number,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${process.env.MAPBOX_TOKEN}`;
    axios.get(url)
        .then((res) => {
          const data = res.data;
          const address = data.features[0].place_name;
          resolve(address);
        })
        .catch((err) => {
          reject(err);
        });
  });
};

export const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${lon1},${lat1};${lon2},${lat2}.json?access_token=${process.env.MAPBOX_TOKEN}`;
    axios.get(url)
        .then((res) => {
          const data = res.data;
          const distance = data.routes[0].distance;
          resolve(distance);
        })
        .catch((err) => {
          reject(err);
        });
  });
};
