export type Order = {
  symbol: string
  side: 'BUY' | 'SELL'
  price?: number
  qty: number
  type: 'MARKET' | 'LIMIT'
}

export abstract class ExchangeAdapter {
  abstract getMarkets(): Promise<any[]>
  abstract placeOrder(order: Order): Promise<any>
}

// Example adapter skeleton for Bybit/Binance/OKX will implement this interface
