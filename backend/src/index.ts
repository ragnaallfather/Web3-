import express from 'express'
import dotenv from 'dotenv'
import referralRoutes from './routes/referralRoutes'
import paymentRoutes from './routes/paymentRoutes'
import exchangeRoutes from './routes/exchangeRoutes'

dotenv.config()
const app = express()
app.use(express.json())

// Mount routes
app.use('/referral', referralRoutes)
app.use('/payments', paymentRoutes)
app.use('/exchanges', exchangeRoutes)

app.get('/health', (req, res) => res.json({ ok: true }))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})

