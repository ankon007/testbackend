//first 
const express = require('express')
const app = express();
const dotenv=require("dotenv").config();


const mongoose = require('mongoose');
const dbconnect=require("./config/dbconnect");

dbconnect();


const tracking=require('./routes/tracking.route');
const shipment = require('./routes/shipment.route'); // Ensure this file exists and is implemented correctly 
const order = require('./routes/order.route'); // Ensure this file exists and is implemented correctly 
const review = require('./routes/review.route'); // Ensure this file exists and is implemented correctly 
const zone = require('./routes/zone.route'); // Ensure this file exists and is implemented correctly 
const price_chart = require('./routes/price_chart.route'); // Ensure this file exists and is implemented correctly 
const user_admin = require('./routes/user_admin.route'); // Ensure this file exists and is implemented correctly; 
const authRoutes=require('./routes/authRoutes');
const userRoutes=require("./routes/userRoutes");

//middle wire

app.use(express.json());

app.use("/track",tracking);
app.use("/shipment", shipment); // Add this line to use the shipment route
app.use("/order", order); // Add this line to use the order route
app.use("/review", review); // Add this line to use the review route
app.use("/zone", zone); // Add this line to use the zone route
app.use("/price_chart", price_chart); // Add this line to use the price_chart route
app.use("/user_admin", user_admin); // Add this line to use the user_admin route; 
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

//second
app.get('/', function (req, res) {
  res.send('Hello World');
});
//third
//database connection+server start
mongoose.connect("mongodb+srv://rhankon2001:1w6BMif7SLp14rng@cluster0.uzs0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Mongodb is Connected");

    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    
    
});
})
.catch((error) => {
    console.log("Mongodb is not Connected:", error.message);
    //fourth
});