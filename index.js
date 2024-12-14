import express from "express"
import dotenv from "dotenv"
dotenv.config({path:"./config.env"})

// import { router,data } from "./routers/router.js"
import xyz from "./routers/router.js"
let app = express()
let port = process.env.port

// app.get("", (req, res) => {
//     res.send('welcome to the  page\n')
// })
// app.get("/about" ,(req ,res) =>{
//     res.send('welcome to the about page\n')
// })
// app.get("/service" ,(req ,res) =>{
//     res.send('welcome to the service page\n')
// })
console.log(xyz)
app.listen(port, () => {
    console.log(`server is running on port :${port} | http://127.0.0.1:${port}`)
})