import {RequestHandler, Router} from 'express';
const router = Router();
import { helloWord, GetPhotos, CreatePhoto, GetPhotosById, UpdatePhoto, DeletePhoto } from '../Controllers/Photo.controller';
import multer from '../libs/multer';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

router.route('/hello')
.get(helloWord);
router.route('/photo')
.get(GetPhotos);
router.route('/photo').post(multer.single('image'), CreatePhoto);
router.route('/photo/:id')
.get(GetPhotosById);
router.route('/photo/:id').delete(DeletePhoto);
router.route('/photo/:id').put(UpdatePhoto);


module.exports = router;
