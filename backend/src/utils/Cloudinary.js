import {v2 as Cloudinary} from 'cloudinary'
import fs from 'fs'
 
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,            
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath){
            throw new Error('Local File Path is required')
        }
        const response = await Cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto',
        })
        console.log("File uploaded successfully")
        response.url()
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}