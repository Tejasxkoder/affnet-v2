import express from "express"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())

import adminRouter from "./routes/admin.route.js"
app.use("/api/v1/users", adminRouter)


export default app;