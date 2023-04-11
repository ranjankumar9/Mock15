const express = require("express");
const { KanbanModel } = require("../model/kanban.model");

const KanbanRouter = express.Router()



KanbanRouter.post("/add", async(req, res) => {
    try {
        const kanban = new KanbanModel(req.body)
        await kanban.save()
        res.send({ "Msg": "Kanban Task Accepted" })

    } catch (err) {
        res.send({ "MSG": "Kanban can not post" })
        console.log(err);
    }
})

KanbanRouter.get("/", async(req,res) => {
    try {
        const kanban = await KanbanModel.find()
        res.send({kanban})
    } catch (err) {
        res.send({"Msg":"Something Wrong"})
        console.log(err)
    }
})

module.exports = {
    KanbanRouter
}