// import fs from "fs-extra"
// import jsonServer from "json-server"
// import path from "path"

const jsonServer = require("json-server")
const path = require("path")
const fs = require("fs-extra")


const server = jsonServer.create()

const router = jsonServer.router(path.resolve("db.json"))

// это просто мидлвэйр который добавляет задержку
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "Auth error" })
    }

    next()
})

server.use(jsonServer.defaults())
server.use(router)

server.post("/login", (req, res) => {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"))
    const { users } = db

    const userFromBd = users.find((user) => user.username === username && user.password === password)

    if (userFromBd) {
        return res.json(userFromBd)
    }

    return res.status(403).json({ message: "Auth error" })
})


server.listen(8000, () => {
    console.log("server start")
})