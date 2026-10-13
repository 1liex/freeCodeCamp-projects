import express from 'express';
import mainRouter from './routes/index.js';
import errorHandler from './middelware/errorHandler.js';

const app = express();
const PORT = 9000;

app.use(express.json())
app.set("json spaces", 2)


app.use(mainRouter)
app.use(errorHandler)

app.get("/",( req, res) =>{
    res.redirect("/accounts")
})
const server = app.listen(PORT, () => {
    console.log(`Tiny Bank API running on http://localhost:${PORT}...`);
});

process.on("SIGTERM", () => {
    console.log("SIGTERM received. Closing server...");
    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    })
})

process.on("SIGINT", () => {
    console.log("SIGINT received. Closing server...");
    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    });
});