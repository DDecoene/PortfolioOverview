import { Asset } from "src/interfaces/asset";

export const portfolio: Array<Asset> = [
  {
    id: 1,
    symbol: 'ethereum',
    name: 'Ethereum',
    market: 'Binance',
    quantityHeld: 0.6,
    currentPrice: 1500,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur',
    totalValue: 0,
  },
  {
    id: 2,
    symbol: 'bitcoin',
    name: 'Bitcoin',
    market: 'Binance',
    quantityHeld: 0.5,
    currentPrice: 45000,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur',
    totalValue: 0,
  },
  {
    id: 3,
    symbol: 'ethereum',
    name: 'Ethereum',
    market: 'Bitvavo',
    quantityHeld: 0.3,
    currentPrice: 1500,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur',
    totalValue: 0,
  },
  {
    id: 4,
    symbol: 'bitcoin',
    name: 'Bitcoin',
    market: 'Bitvavo',
    quantityHeld: 0.2,
    currentPrice: 45000,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur',
    totalValue: 0,
  },
  {
    id: 5,
    symbol: 'safemoon',
    name: 'SafeMoon',
    market: 'PancakeSwap',
    quantityHeld: 11300000,
    currentPrice: 0.00000384,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=safemoon&vs_currencies=eur',
    totalValue: 0,
  },
];