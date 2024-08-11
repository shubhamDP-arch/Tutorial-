import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const UserSchema = new Schema({
  username:{
    type: String,
    trim: true,
    lowercase: true,
    required:true,
    unique: true,
    index: true
  },
  email:{
    trim: true,
    lowercase: true,
    required:true,
    unique: true,
   
  },
  fullname:{
    trim: true,
    required:true,
    index:true
  },
  avatar:{
    type:String,
    required:true,
  },
  coverImage:{
    type:String
  },
  watchHistory:[
    {
      type: Schema.type.ObjectId,
      ref:"Video"
    }
  ],
  password:{
    type:String,
    required:['true', "Password is required"]
  },
  refreshToken:{
    type:String
  }
},{timestamps:true})
userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username,
          fullName: this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}

export const User = mongoose.model("User", userSchema)