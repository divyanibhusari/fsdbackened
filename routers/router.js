import express from "express"
let router = express()
let data = 7895
router.get("/", (req, res) => {
    console.log("Home pages in the server")
    res.json({ message: "this is a message" })
})
// named export 
// export { router, data } 
// default export
export default data