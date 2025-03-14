import mongoose from "mongoose"

const connectionString = ''

const connectDB = (url) => {
    return mongoose.connect(url,{
        useFindAndModify:false,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useCreateIndex:true
    })
    .then(()=>{console.log("The Connection to the DB is succesful");})
    .catch((err)=>{console.log(err);})
}

export default connectDB;