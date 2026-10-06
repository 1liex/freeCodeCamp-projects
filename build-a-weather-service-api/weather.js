import express from 'express'

const router = express.Router()

const SUPPORTED_CITIES = [
    'London', 'Tokyo'
]

router.get("/", (req, res) => {
    res.status(200).json({ SUPPORTED_CITIES })
})

router.get("/:city", async (req, res) => {
    const { city } = req.params;
    try {
        const respons = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        if (!respons.ok) throw new Error(`[fetch weather error], status ${respons.status}`)
        const data = await respons.json()

        res.status(200).json({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
        })
    } catch (error) {
        res.status(404).json({
            error: `Could not fetch weather data for "${city}".`
        })
    }
});

export default router