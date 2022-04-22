import {IReadingRequest, IStructTrip} from '../../interfaces';

export const initialTrips: IStructTrip[] = [
  {
    'start': {
      'time': 1642500462000,
      'lat': -33.580158,
      'lon': -70.567227,
      // eslint-disable-next-line max-len
      'address': 'San Fermin 3186, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'end': {
      'time': 1642500498000,
      'lat': -33.580053,
      'lon': -70.568502,
      // eslint-disable-next-line max-len
      'address': 'El Penon 1130, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'distance': 293,
    'duration': 36000,
    'overspeedsCount': 0,
    'boundingBox': [
      {
        'lat': -33.580158,
        'lon': -70.567227,
      },
      {
        'lat': -33.58013,
        'lon': -70.566995,
      },
      {
        'lat': -33.580117,
        'lon': -70.566633,
      },
      {
        'lat': -33.580078,
        'lon': -70.566408,
      },
      {
        'lat': -33.580005,
        'lon': -70.566498,
      },
      {
        'lat': -33.58002,
        'lon': -70.566837,
      },
      {
        'lat': -33.580038,
        'lon': -70.567265,
      },
      {
        'lat': -33.580043,
        'lon': -70.56773,
      },
      {
        'lat': -33.580048,
        'lon': -70.56817,
      },
      {
        'lat': -33.580053,
        'lon': -70.568502,
      },
    ],
  },
  {
    'start': {
      'time': 1642500462000,
      'lat': -33.580158,
      'lon': -70.567227,
      // eslint-disable-next-line max-len
      'address': 'San Fermin 3186, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'end': {
      'time': 1642500474000,
      'lat': -33.580078,
      'lon': -70.566408,
      // eslint-disable-next-line max-len
      'address': 'El Penon 1293, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'distance': 81,
    'duration': 12000,
    'overspeedsCount': 1,
    'boundingBox': [
      {
        'lat': -33.580158,
        'lon': -70.567227,
      },
      {
        'lat': -33.58013,
        'lon': -70.566995,
      },
      {
        'lat': -33.580117,
        'lon': -70.566633,
      },
      {
        'lat': -33.580078,
        'lon': -70.566408,
      },
      {
        'lat': -33.580078,
        'lon': -70.566408,
      },
    ],
  },
  {
    'start': {
      'time': 1642500478000,
      'lat': -33.580005,
      'lon': -70.566498,
      // eslint-disable-next-line max-len
      'address': 'El Penon 1314, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'end': {
      'time': 1642500498000,
      'lat': -33.580053,
      'lon': -70.568502,
      // eslint-disable-next-line max-len
      'address': 'El Penon 1130, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'distance': 189.049,
    'duration': 20000,
    'overspeedsCount': 0,
    'boundingBox': [
      {
        'lat': -33.580005,
        'lon': -70.566498,
      },
      {
        'lat': -33.58002,
        'lon': -70.566837,
      },
      {
        'lat': -33.580038,
        'lon': -70.567265,
      },
      {
        'lat': -33.580043,
        'lon': -70.56773,
      },
      {
        'lat': -33.580053,
        'lon': -70.568502,
      },
    ],
  },
  {
    'start': {
      'time': 1642500478346,
      'lat': -33.580387,
      'lon': -70.566498,
      // eslint-disable-next-line max-len
      'address': 'El Penon 1271, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'end': {
      'time': 1642500498099,
      'lat': -33.580657,
      'lon': -70.568502,
      // eslint-disable-next-line max-len
      'address': 'El Penon 1079, Puente Alto, Santiago Metropolitan 8150000, Chile',
    },
    'distance': 391.515,
    'duration': 19753,
    'overspeedsCount': 0,
    'boundingBox': [
      {
        'lat': -33.580387,
        'lon': -70.566498,
      },
      {
        'lat': -33.58007,
        'lon': -70.566837,
      },
      {
        'lat': -33.580038,
        'lon': -70.567249,
      },
      {
        'lat': -33.580043,
        'lon': -70.567769,
      },
      {
        'lat': -33.580657,
        'lon': -70.568502,
      },
    ],
  },
];

export const readings: IReadingRequest[] = [
  {
    'time': 1642500470000,
    'speed': 28,
    'speedLimit': 38,
    'location': {
      'lat': -33.580117,
      'lon': -70.566633,
    },
  },
  {
    'time': 1642500474000,
    'speed': 48,
    'speedLimit': 38,
    'location': {
      'lat': -33.580078,
      'lon': -70.566408,
    },
  },
  {
    'time': 1642500462000,
    'speed': 9,
    'speedLimit': 38,
    'location': {
      'lat': -33.580158,
      'lon': -70.567227,
    },
  },
  {
    'time': 1642500466000,
    'speed': 75,
    'speedLimit': 38,
    'location': {
      'lat': -33.58013,
      'lon': -70.566995,
    },
  },
  {
    'time': 1642500478000,
    'speed': 18,
    'speedLimit': 38,
    'location': {
      'lat': -33.580005,
      'lon': -70.566498,
    },
  },
  {
    'time': 1642500482000,
    'speed': 32,
    'speedLimit': 38,
    'location': {
      'lat': -33.58002,
      'lon': -70.566837,
    },
  },
  {
    'time': 1642500494000,
    'speed': 35,
    'speedLimit': 38,
    'location': {
      'lat': -33.580048,
      'lon': -70.56817,
    },
  },
  {
    'time': 1642500498000,
    'speed': 20,
    'speedLimit': 38,
    'location': {
      'lat': -33.580053,
      'lon': -70.568502,
    },
  },
  {
    'time': 1642500486000,
    'speed': 38,
    'speedLimit': 38,
    'location': {
      'lat': -33.580038,
      'lon': -70.567265,
    },
  },
  {
    'time': 1642500490000,
    'speed': 38,
    'speedLimit': 38,
    'location': {
      'lat': -33.580043,
      'lon': -70.56773,
    },
  },
];

export const readingsError = [
  {
    'time': 'string',
    'speed': 'string',
    'speedLimit': 'string',
    'location': {
      'lat': 'string',
      'lon': 'string',
    },
  },
  {
    'time': 1642500466000,
    'speed': 26,
    'speedLimit': 38,
    'location': {
      'lat': -33.58013,
      'lon': -70.566995,
    },
  },
  {
    'time': 1642500470000,
    'speed': 28,
    'speedLimit': 38,
    'location': {
      'lat': -33.580117,
      'lon': -70.566633,
    },
  },
];
