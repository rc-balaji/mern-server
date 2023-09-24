const TaskModel = require('../Models/TaskModel')

module.exports.getTasks = async (req,res)=>{
    const tasks = await TaskModel.find()
    res.send(tasks)
}
module.exports.saveTasks =  (req,res)=>{
    const {task} =  req.body
    TaskModel.create({task}).then((data)=>{
        console.log("Saved Succesfully")
        res.status(201).send(data)
    }).catch((err)=>{console.log(err)
    res.send({error:err,msg:"Something Wrong"})})
}
module.exports.updateTasks =  (req,res)=>{
    const {id} = req.params
    const {task} =  req.body
    TaskModel.findByIdAndUpdate(id,{task}).then(()=>{
        console.log("Updated Succesfully")
        res.send("Updated Succesfully")
    }).catch((err)=>{console.log(err)
    res.send({error:err,msg:"Something Wrong"})})
}
module.exports.deleteTasks =  (req,res)=>{
    const {id} = req.params

    TaskModel.findByIdAndDelete(id).then(()=>{
        console.log("Deleted Succesfully")
        res.send("Deleted Succesfully")
    }).catch((err)=>{console.log(err)
    res.send({error:err,msg:"Something Wrong"})})
}


// module.exports.sample=async (res,req)=>{
//     res.send("Sample")
// }