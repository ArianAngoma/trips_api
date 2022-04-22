import supertest from 'supertest';
import mongoose from 'mongoose';

import Server from '../../models/server';
import Trip from '../../models/trip';
import {initialTrips, readings, readingsError} from '../data/data';

const instance = new Server();
const server = instance.listen();
const api = supertest(instance.app);

beforeEach(async () => {
  await Trip.deleteMany();

  await Trip.create([...initialTrips]);
});

describe('Test in endpoint GET /api/trips/v1', () => {
  test('Should return a JSON', async () => {
    await api
        .get('/api/trips/v1')
        .expect(200)
        .expect('Content-Type', /application\/json/);
  });

  test('Should return 2 trips', async () => {
    const response = await api.get('/api/trips/v1')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    expect(response.body.trips).toHaveLength(initialTrips.length);
  });

  test('Should return only 2 trips - limit', async () => {
    const response = await api.get('/api/trips/v1?limit=2')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    expect(response.body.trips).toHaveLength(2);
  });

  test('Should return only 3 trips - offset', async () => {
    const response = await api.get('/api/trips/v1?offset=1')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    expect(response.body.trips).toHaveLength(3);
  });

  test('Should return only 1 trips - distance_gte', async () => {
    const response = await api.get('/api/trips/v1?distance_gte=300')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    expect(response.body.trips).toHaveLength(1);
  });

  test('Should return only 2 trips - start_gte', async () => {
    const response = await api.get('/api/trips/v1?start_gte=1642500468000')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    expect(response.body.trips).toHaveLength(2);
  });

  test('Should return only 2 trips - start_lte', async () => {
    const response = await api.get('/api/trips/v1?start_lte=1642500465000')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    expect(response.body.trips).toHaveLength(2);
  });
});

describe('Test in endpoint POST /api/trips/v1', () => {
  test('A new Trip should be created correctly', async () => {
    const response = await api
        .post('/api/trips/v1')
        .send({readings})
        .expect(200)
        .expect('Content-Type', /application\/json/);

    expect(response.body).toHaveProperty('id');
    expect(response.body.duration).toBe(36000);
    const trips = await api.get('/api/trips/v1');
    expect(trips.body.trips).toHaveLength(initialTrips.length + 1);
  });

  test('Should return error when trying to create a new trip', async () => {
    const response = await api
        .post('/api/trips/v1')
        .send(readingsError)
        .expect(422)
        .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].statusCode).toBe(422);
    expect(response.body.errors[0].errorCode).toBe(1);
    expect(response.body.errors[0].srcMessage)
        .toBe('Must have at least 5 readings');
    expect(response.body.errors[0].translatedMessage)
        .toBe('Debe tener al menos 5 lecturas');
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
  server.close();
});


