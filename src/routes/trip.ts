import {Router} from 'express';
import {body} from 'express-validator';

import {validateFields} from '../middlewares/validateFields';
import {validateLatitude, validateLongitude} from '../helpers/validations';

const router = Router();

router.get('/', () => console.log('get trips'));

router.post('/', [
  body('readings').isArray({min: 5}),
  body('readings.*.time').isNumeric(),
  body('readings.*.speed').isNumeric(),
  body('readings.*.speedLimit').isNumeric(),
  body('readings.*.location.lat').custom(validateLatitude),
  body('readings.*.location.lon').custom(validateLongitude),
  validateFields,
], () => console.log('post trips'));

export default router;
