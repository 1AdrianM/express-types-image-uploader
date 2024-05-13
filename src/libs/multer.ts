import multer from 'multer';
import {uuid} from 'uuidv4';
import path from 'path'
const storage = multer.diskStorage({

    destination: "Uploads" ,
    filename(req, file, cb) {
        cb(null, uuid()+ path.extname(file.originalname)); 
    }
})

console.log(uuid());

export default multer({storage})