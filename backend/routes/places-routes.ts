import {Router} from 'express';
import { createPlace, getPlaceById, getPlaceByUserId } from '../controllers/places-controller';

const router = Router();

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlaceByUserId);

router.post('/', createPlace);

module.exports = router;