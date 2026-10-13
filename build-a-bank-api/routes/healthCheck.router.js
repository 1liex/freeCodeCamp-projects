import express from 'express'
const healthCheckRouter = express.Router()
healthCheckRouter.get("/", (req, res) => {
    res.status(200).json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        memoryUsage: process.memoryUsage(),
    });
});

export default healthCheckRouter