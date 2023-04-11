const express = require("express")
const { connection } = require("./Utils/db")
const { UserRouter } = require("./routes/user.route")
require('dotenv').config()
var cors = require('cors')
const { authenticate } = require("./middleware/user.middlware")
const { KanbanRouter } = require("./routes/kanban.route")

const app = express()
app.use(cors())


app.get("/", (req, res) => {
    res.send({ "Msg": "Welcome to Kanban" })
})

app.use(express.json())
app.use("/users", UserRouter)
app.use(authenticate)
app.use("/kanban", KanbanRouter)


app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Conntected To Database")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is Running on the Port ${process.env.port}`)
})


