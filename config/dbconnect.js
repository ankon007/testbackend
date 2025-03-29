const mongoose=require("mongoose");

const dbconnect=async()=>{
try{
    const connect=await mongoose.connect(process);//PROBLEN W#####################################
    console.log('database connected: ${connect.connection.host},${connect.name}');
}

catch(error){
    console.log(error);
    process.exit(1);
}
};
module.exports=dbconnect;
