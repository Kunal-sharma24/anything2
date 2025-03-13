import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        islowercase: true, 
        index: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        islowercase: true, 
        trim: true,
    },  
    password: { 
        type: String, 
        required: [true, 'Password is required'] 
    },
    refreshToken: { 
        type: String 
    },

    }, 
    { 
    timestamps: true 
    }
)

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.GenerateAccessToken = function () {
    return jwt.sign(
        {   _id: this._id ,
            email: this.email,
            username: this.username,
            name: this.name,
        }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY 

        }
    )
}

userSchema.methods.GenerateRefreshToken = function () {
    return jwt.sign(
        {   _id: this._id ,
        }, 
        process.env.REFRESH_TOKEN_SECRET, 
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY 

        }
    )
}


export const User = mongoose.model("User", userSchema)