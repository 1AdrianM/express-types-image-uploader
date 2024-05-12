import Photo from '../Model/Photo';
import { Response, Request } from 'express';

export const helloWord = (req:Request, res:Response) =>{
   return res.json({message: "hello word"})
}

