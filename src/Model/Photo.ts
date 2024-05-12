import {model, Document, Schema} from 'mongoose';

interface Iphoto extends Document{

    imgPath:string;
    title:string;
    description: string;
}

const PhotoSchema =  new Schema({

imgPath:String,
title:String,
description: String

})
export default model<Iphoto>("Photo", PhotoSchema)

 