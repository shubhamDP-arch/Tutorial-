import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'

//configs

dotenv.config({
  path:'.env'
})


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