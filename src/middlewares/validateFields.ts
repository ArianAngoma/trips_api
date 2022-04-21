import {Request, Response, NextFunction} from 'express';
import {ValidationError, validationResult} from 'express-validator';

import {ERRORS} from '../helpers/errors';
import {IError} from '../interfaces';

const getField = (errors: ValidationError[]) => {
  return errors.map((error: ValidationError) => {
    const array = error.param.split('.');
    return array[array.length - 1];
  });
};

export const validateFields = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const fields = getField(errors.array());

    const response: IError[] = [];
    fields.forEach((field: string) => {
      response.push(ERRORS[field]);
    });

    return res.status(422).json({
      errors: response,
    });
  }

  next();
};
