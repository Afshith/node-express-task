import Task from "../models/Task.js"


export const getAllTasks = async(req,res) => {
    try {
        const tasks = await Task.find();
        res.send({tasks})
    } catch (error) {
        res.status(404).json(error)
    }
    
}

export const getTask = async(req,res) => {
    
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        if(!task){
            res.status(404).json({
                message:`The task with this id ${taskId} is not found bro`
            })
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(404).json(error)
    }   
}

export const createTask = async(req,res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(404).json(error)
    }   
}

export const updateTask = async(req,res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            runValidators:true,
            new:true
        });
        if(!task){
            res.status(404).json({
                message:`The task with this id ${taskId} is not found bro`
            })
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(404).json(error)
    }   
}

export const deleteTask = async(req,res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task){
            res.status(404).json({
                message:`The task with this id ${taskId} is not found bro`
            })
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(404).json(error)
    }   
}

