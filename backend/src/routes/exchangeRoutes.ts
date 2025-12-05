import express from 'express'
import BybitAdapter from '../exchanges/bybitAdapter'

const router = express.Router()

// Adapter instances (add BinanceAdapter, OKXAdapter later)
const adapters: Record<string, any> = {
  bybit: new BybitAdapter()
}

// List available exchange keys
router.get('/', (req, res) => {
  res.json({ exchanges: Object.keys(adapters) })
})

// GET /exchanges/markets?exchange=bybit
router.get('/markets', async (req, res) => {
  const exchange = ((req.query.exchange as string) || 'bybit').toLowerCase()
  const adapter = adapters[exchange]
  if (!adapter) return res.status(404).json({ error: 'unknown exchange' })
  try {
    const markets = await adapter.getMarkets()
    res.json({ exchange, markets })
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'failed to fetch markets' })
  }
})

export default router