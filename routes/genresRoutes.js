import express from 'express';
import {GetIndex, PostCreate, GetCreate, Delete, GetEdit, PostEdit} from '../controllers/GenerosController.js';

const router = express.Router();

router.get('/index', GetIndex);
router.get('/create', GetCreate);
router.post('/create', PostCreate);
router.post('/delete', Delete)
router.get('/edit/:genreId', GetEdit)
router.post('/edit', PostEdit)
export default router;