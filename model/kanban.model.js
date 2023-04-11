const mongoose = require("mongoose")

const kanban = {
    title:{type:String, require:true},
    isCompleted:Boolean
}

const KanbanSchema = mongoose.Schema({
    name:{type:String, require:true},
    description:{type:String, require:true},
    subtask:[kanban],
    status:{type:String, require:true}
},{
    versionKey:false
})

const KanbanModel = mongoose.model("kanbantodo", KanbanSchema)

module.exports = {
    KanbanModel
}


// - Task Name
// - Description
// - Subtasks (Should support multiple)
// - Current Status (Select tag with Todo, Doing, Done as options)
// - Create Task Button