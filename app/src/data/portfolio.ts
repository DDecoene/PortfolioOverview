import { Asset } from "src/interfaces/asset";

export const portfolio: Array<Asset> = [
  {
    id: 1,
    symbol: 'ethereum',
    name: 'Ethereum',
    market: 'Binance',
    quantityHeld: 0.6,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur',
  },
  {
    id: 2,
    symbol: 'bitcoin',
    name: 'Bitcoin',
    market: 'Binance',
    quantityHeld: 0.5,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur',
  },
  {
    id: 3,
    symbol: 'ethereum',
    name: 'Ethereum',
    market: 'Bitvavo',
    quantityHeld: 0.3,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur',
  },
  {
    id: 4,
    symbol: 'bitcoin',
    name: 'Bitcoin',
    market: 'Bitvavo',
    quantityHeld: 0.2,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur',
  },
  {
    id: 5,
    symbol: 'safemoon',
    name: 'SafeMoon',
    market: 'PancakeSwap',
    quantityHeld: 11300000,
    priceApiURL: 'https://api.coingecko.com/api/v3/simple/price?ids=safemoon&vs_currencies=eur',
  },
];
