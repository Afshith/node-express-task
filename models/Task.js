import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[50,"must between 0 to 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model("Task",TaskSchema);

export default Task;