import {IListErrors} from '../interfaces';

export const ERRORS: IListErrors = {
  readings: {
    statusCode: 422,
    errorCode: 1,
    srcMessage: 'Must have at least 5 readings',
    translatedMessage: 'Debe tener al menos 5 lecturas',
  },
  time: {
    statusCode: 422,
    errorCode: 2,
    srcMessage: 'Time attribute is invalid',
    translatedMessage: 'El atributo tiempo no es válido',
  },
  speed: {
    statusCode: 422,
    errorCode: 3,
    srcMessage: 'Speed attribute is invalid',
    translatedMessage: 'El atributo de velocidad no es válido',
  },
  speedLimit: {
    statusCode: 422,
    errorCode: 4,
    srcMessage: 'Speed limit attribute is invalid',
    translatedMessage: 'El atributo de límite de velocidad no es válido',
  },
  lat: {
    statusCode: 422,
    errorCode: 5,
    srcMessage: 'Latitude attribute is invalid',
    translatedMessage: 'El atributo de latitud no es válido',
  },
  lon: {
    statusCode: 422,
    errorCode: 5,
    srcMessage: 'Longitude attribute is invalid',
    translatedMessage: 'El atributo de longitud no es válido',
  },
};
