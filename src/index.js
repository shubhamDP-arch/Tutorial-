import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
  path:'.env'
})

connectDB()








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