import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const registerUser = asyncHandler( async (req, res) => {
   //get user details from frontend
   //validation - not empty
   //check if user already exits: username, email
   //create user object - create entry in db
   //remove password and refresh token field from response
   //check if user is created
   //return response
   const { username, email, fullName, password } = req.body 
  
    if(
     [ username, email, fullName, password].some((field) => field?.trim() === "" )
  ) {
       throw new ApiError(400, "All fields are required")
  }
   const userExisted = await User.findOne({
         $or: [
              {email: email},
              {username: username}
         ]
    })

    if(userExisted){
        throw new ApiError(409, "User already exists")
    }

    const user = await User.create({
        username,
        email,
        fullName,
        password
    })

    const userCreated = await User.findById(user._id).select(
        "-password -refreshToken"
    )
   
    if(!userCreated){
        throw new ApiError(500, "Something went wrong!!!, User not created")
    }

    return res.status(201).json(
        new ApiResponse(201, userCreated, "User created successfully"))

   })

   


export {
    registerUser,
}