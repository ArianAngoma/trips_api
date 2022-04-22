# Trips Api

Api Rest for Trips created with NodeJs, Express and MongoDB as database.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_MONGO`

`DB_MONGO_TEST`

`MAPBOX_TOKEN`


## Deployment

To run this project, execute

```bash
  docker build -t trips_api .
```

```bash
  docker run --rm -p 4000:4000 trips_api
```


## API Reference

#### Get trips

Gets a list of trips

```http
  GET /api/trips/v1
```

#### Post trip

Take a list of readings to create a trip

```http
  POST /api/trips/v1
```
