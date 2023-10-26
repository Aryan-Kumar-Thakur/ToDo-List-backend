import ErrorHandler from '../middlewares/error.js'
import Task from '../models/task.js'

const createTask = async (req, res, next) => {
    try {
        const { title, description } = req.body
        const task = await Task.create({ title, description, user: req.user })
        res.status(201).json({
            success: true,
            message: "created successfully",
            task
        })
    } catch (error) {
        next(error)
    }
}

const getMyTask = async (req, res) => {
    try {
        const userid = req.user._id
        const tasks = await Task.find({ user: userid })
        res.status(200).json({
            success: true,
            message: "all task fetched successfully",
            tasks
        })
    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) return next(new ErrorHandler("Task not found", 404))
        task.isCompleted = !task.isCompleted
        await task.save()
        res.status(200).json({
            success: true,
            message: "updated successfully",
        })
    } catch (error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) return next(new ErrorHandler("Task not found", 404))
        await task.deleteOne()
        res.status(200).json({
            success: true,
            message: "task deleted successfully",
        })
    } catch (error) {
        next(error)
    }
}

export { createTask, getMyTask, updateTask, deleteTask }