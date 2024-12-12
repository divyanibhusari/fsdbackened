import express from "express"
let app = express()
let port = 1243
app.get("", (req, res) => {
    res.send('welcome to the  page\n')
})
app.get("/about" ,(req ,res) =>{
    res.send('welcome to the about page\n')
})
app.get("/service" ,(req ,res) =>{
    res.send('welcome to the service page\n')
})
app.listen(port, () => {
    console.log("Welcome to the web server")
})