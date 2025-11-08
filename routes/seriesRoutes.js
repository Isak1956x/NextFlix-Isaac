import express from 'express';
import {GetIndex, GetCreate, PostCreate, Delete, GetEdit, PostEdit, GetDetails, GetSearch, GetFilter} from '../controllers/SeriesController.js';

const router = express.Router();

router.get('/index', GetIndex);
router.get('/create', GetCreate);
router.post('/create', PostCreate);
router.post('/delete', Delete)
router.get('/edit/:serieId', GetEdit)
router.post('/edit', PostEdit)
router.get('/details/:serieId', GetDetails)
router.get('/search', GetSearch)
router.get('/filter', GetFilter)

export default router;