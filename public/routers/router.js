import express from "express"
import { getAbout, getHome, getService } from "../../controllers/controlles.js"
let router = express()

router.get("/", getHome)
router.get("/About", getAbout)
router.get("/Service", getService)
// named export 
// export { router, data } 
// default export
export default router