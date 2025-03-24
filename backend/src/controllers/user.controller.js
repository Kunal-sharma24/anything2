import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const GenerateAccessAndRefreshToken = async (userId) => {
   try {
    const user = await User.findById(userId)
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({validateBeforeSave: false})
    return {accessToken, refreshToken}
    
   } catch (error) {
        throw new ApiError(500, "Something went wrong")
    
   }

}

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

   const loginUser = asyncHandler(async (req,res) => {
    //req body -> data
    //username or email
    //check user
    //check password
    //create token
    //send cookie
    const { username, email, password } = req.body

    if(!(username || email)){
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findOne({
        $or: [
            {username: username},
            {email: email}
        ]
    })

    if(!user){
        throw new ApiError(404, "User not found or invalid credentials")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Wrong password or invalid credentials")
    }

    const {accessToken, refreshToken} = await GenerateAccessAndRefreshToken(user._id)

    const isLoggedin = await User.findById(user._id).select("-password -refreshToken")

    const option = {
        httpOnly: true,
        secure: true,
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
        new ApiResponse(
            200, {
            user: isLoggedin,
            accessToken,
            refreshToken
            },
            "User logged in successfully"
        )
    )
   })


   const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,

        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )
    const option = {
        httpOnly: true,
        secure: true,
    }

    return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(
        new ApiResponse(200, {}, "User logged out successfully")
    )

    


   })
   


export {
    registerUser,
    loginUser,
    logoutUser
}