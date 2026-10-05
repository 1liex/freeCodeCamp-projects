const experess = require("express")
const { inputValidator, inputCleaner } = require("./middleware/middlewares")
const app = experess()
const port = 3000

const path = require("path")

app.use("/form", experess.static(path.join(__dirname, "public")))
app.use(experess.urlencoded({ extended: true }))

// routers
app.get("/", (req, res) => {
    res.redirect("/form")
})

app.post("/submit", inputValidator, inputCleaner, (req, res) => {
    res.send(`${req.body.username}, ${req.body.comment}`)
})


app.listen(port, () => {
    console.log("http://localhost:3000")
})