import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

//configs

app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

dotenv.config({
  path:'.env'
})

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>
    console.log(`Mongo is connected at Port ${process.env.PORT}`)
  )
})
  .catch((err)=>{
    console.log(err)
  })

//config end





/*
app = express()
( async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}`/$`${DB_NAME}`)
    application.on("error", (error)=>{
      console.log("ERR:", error)
      throw error
    })
    app.lister(process.env.PORT, ()=>{
      console.log(`app is listening on port ${process.env.PORT }`)
    })
  }
  catch(error){
    console.error("ERROR:", error)
    throw err
  }
})()
*/