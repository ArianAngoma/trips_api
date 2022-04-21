export interface IReadingRequest {
  time: number;
  speed: number;
  speedLimit: number;
  location: {
    lat: number
    lon: number
  };
}

export interface IReadingResponse {
  time: number;
  lat: number;
  lon: number;
  address: string;
}
