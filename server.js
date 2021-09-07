import express from "express";
import cors from "cors"
import slackRoutes from "./src/Routes/slackRoutes.js"

const app = express();
app.use(cors())

app.use("/", slackRoutes)

app.listen(5000, () => console.log("server has started"))