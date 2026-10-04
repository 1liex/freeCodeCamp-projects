import experess from "express"
import router from "./routes.js"
const app = experess()
const port = 3000


app.use("/", router)



app.listen(port, () => {
    console.log("http://localhost:3000")
})