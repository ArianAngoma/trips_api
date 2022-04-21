export interface IError {
  statusCode: number;
  errorCode: number;
  srcMessage: string;
  translatedMessage: string;
}

export interface IListErrors {
  [key: string]: IError;
}
