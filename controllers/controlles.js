let getHome =(req, res) => {
   
    // res.json({ message: "this is a Home Page message" })
    res.status(200).sendFile("index.html")
}
let getAbout =(req, res) => {
   
    res.status(200).json({ message: "this is a About Page message" })
}
let getService =(req, res) => {
   
    res.status(200).json({ message: "this is a Service Page message" })
}
export {getHome,getAbout,getService}