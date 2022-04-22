import {Router} from 'express';
import {body} from 'express-validator';

import {createTrip, getTrips} from '../controllers/trip';
import {validateFields} from '../middlewares/validateFields';
import {validateLatitude, validateLongitude} from '../helpers/validations';

const router = Router();

router.get('/', getTrips);

router.post('/', [
  body('readings').isArray({min: 5}),
  body('readings.*.time').isNumeric(),
  body('readings.*.speed').isNumeric(),
  body('readings.*.speedLimit').isNumeric(),
  body('readings.*.location.lat').custom(validateLatitude),
  body('readings.*.location.lon').custom(validateLongitude),
  validateFields,
], createTrip);

export default router;
