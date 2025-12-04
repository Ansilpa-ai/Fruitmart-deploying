// const mongoose = require('mongoose')
// const dbConnect = async() =>{
//     try{
//     await mongoose.connect(process.env.mongourl)
//     console.log("Database Connection Successful")
//     }
//     catch(err){
//     console.log("Database Connection Failed")
//     }
// }

// module.exports = dbConnect

const mongoose = require("mongoose")

async function dbConnect() {
  try {
    await mongoose.connect(process.env.mongour)
    console.log("MongoDB Connected ✔️")
  } catch(err) {
    console.log("MongoDB Error ❌", err)
  }
}

module.exports = dbConnect
