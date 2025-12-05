import axios from 'axios'
import { ExchangeAdapter, Order } from './exchangeAdapter'

export default class BybitAdapter extends ExchangeAdapter {
  private baseUrl: string

  constructor() {
    super()
    // Use BYBIT_TESTNET_BASE env var if provided, else default to Bybit Testnet
    this.baseUrl = process.env.BYBIT_TESTNET_BASE || 'https://api-testnet.bybit.com'
  }

  async getMarkets(): Promise<any[]> {
    try {
      const resp = await axios.get(`${this.baseUrl}/v2/public/symbols`)
      const result = resp.data?.result || resp.data
      if (!Array.isArray(result)) return []
      return result.map((s: any) => ({
        symbol: s.name || s.symbol || s.sid || s.symbolName,
        base: s.base_currency || s.baseToken || s.base,
        quote: s.quote_currency || s.quoteToken || s.quote,
        type: s.contract_type || s.type || 'perpetual'
      }))
    } catch (err) {
      console.warn('Bybit getMarkets failed, returning fallback sample', err?.message)
      // Fallback sample market
      return [
        { symbol: 'BTCUSDT', base: 'BTC', quote: 'USDT', type: 'perpetual' },
        { symbol: 'ETHUSDT', base: 'ETH', quote: 'USDT', type: 'perpetual' }
      ]
    }
  }

  async placeOrder(order: Order): Promise<any> {
    // Not implemented in scaffold - live trading flows will be added with secure key handling
    throw new Error('placeOrder not implemented in BybitAdapter scaffold')
  }
}