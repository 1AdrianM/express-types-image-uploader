import Photo from '../Model/Photo';
import { Response, Request } from 'express';
import fs from 'fs-extra'
const path = require('path')
export const helloWord = (req:Request, res:Response) =>{
   return res.send("hello word, and Welcome to minecraft");
}
export const CreatePhoto= async (req:Request, res:Response): Promise<Response>=>{
const {title, description} = req.body
const photoObj ={
   title:title, description:description, ImgPath: req.file?.path
}
const photo = await new Photo(photoObj);
await photo.save();
return res.status(201).json(photo);
}
export const GetPhotos =  async(req:Request, res:Response): Promise<Response>=>{
const photos = await Photo.find();
return res.status(201).json(photos);
}
export const GetPhotosById =  async(req:Request, res:Response): Promise<Response>=>{
const {id} = req.params;
const photo = await Photo.findById(id);
if(!photo){
   return res.status(400).json({message: "an error ocurred"})
}
else{
   return res.status(200).json(photo);
}
}
export const UpdatePhoto =  async(req:Request, res:Response):Promise<Response>=>{
const {id}= req.params;
const {title, description} = req.body
const photo = await Photo.findByIdAndUpdate(id, 
   {
      title: title || undefined,
      description: description||undefined
   }
)
return res.status(201).json({message:" update succesfully",
   photo
})
}
export const DeletePhoto =  async(req:Request, res:Response): Promise<Response>=>{
const {id} = req.params
if(!id) res.status(400).json({message:"incorrect id or invalid parameter data"})

const deletedPhoto = await Photo.findByIdAndDelete(id);
if(deletedPhoto){
   fs.unlink(path.resolve(deletedPhoto.imgPath))
}
return res.status(201).json({message:"Photo deleted", deletedPhoto: deletedPhoto})
}