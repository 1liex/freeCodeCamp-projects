import  Router  from "express"

const router = Router()

router.get("/", (req, res) => {
    res.send("Welcome to Camper Bot's homepage!")
})

router.get("/hobbies", (req, res) => {
    res.send("I cycle, go boating, and play guitar.")
})

router.get("/skills", (req, res) => {
    res.send("JavaScript, Node.js, and Express.js!")
})

router.get("/api/profile", (req, res) => {
    res.json({
        name: "Camper Bot",
        hobbies: ['cycling', 'boating', 'guitar'],
        skills: ['JavaScript', 'Node.js', 'Express.js']
    })
})

export default router