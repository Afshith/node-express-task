import Task from "../models/Task.js"
import asyncWrapper from "../middleware/asyncWrapper.js";

export const getAllTasks = asyncWrapper(async(req,res) => {
        const tasks = await Task.find();
        res.send({tasks})   
})

export const getTask = asyncWrapper(async(req,res) => {
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        if(!task){
            res.status(404).json({
                message:`The task with this id ${taskId} is not found bro`
            })
        }
        res.status(201).json({task});
})

export const createTask = asyncWrapper(async(req,res) => {
        const task = await Task.create(req.body);
        res.status(201).json({task}); 
})

export const updateTask = asyncWrapper(async(req,res) => {
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
    }
);

export const deleteTask = asyncWrapper(async(req,res) => {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task){
            res.status(404).json({
                message:`The task with this id ${taskId} is not found bro`
            })
        }
        res.status(201).json({task}); 
});

