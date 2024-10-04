import express from "express"
import paymentRoutes from "./routes/paymentRoutes.mjs"

const PORT = 3001

const app = express()
app.use(express.json())
app.use('/api', paymentRoutes )

app.listen(PORT, () => {
    console.log(`servidor rodando na porta: ${PORT}`)
})