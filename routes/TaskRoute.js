const {Router} = require("express")
const {getTasks,saveTasks,updateTasks,deleteTasks} = require("../controllers/TaskControllers")
const router = Router()

router.get("/get",getTasks)
router.post("/save",saveTasks)
router.delete("/delete/:id",deleteTasks)
router.put("/update/:id",updateTasks)


module.exports = router