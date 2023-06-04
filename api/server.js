const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")
const port = 5000;

//routes

const categoryRoute = require("./routes/categories.js")

dotenv.config()

const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongoDb");
    } catch (error) {
        throw error
    }
}

// middlewares
app.use(express.json())
app.use(cors())

app.use("/api/categories", categoryRoute)



app.listen(port, () => {
    connect()
console.log(`test listening port ${port}`);
})
