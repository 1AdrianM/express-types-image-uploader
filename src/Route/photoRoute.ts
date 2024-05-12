import express from 'express';
const Router = express.Router();
import { helloWord } from '../Controllers/Photo.controller';

Router.route('/').get(helloWord);


export default Router;