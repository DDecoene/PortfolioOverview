export interface Asset {
  id: number;
  symbol: string;
  name: string;
  market: string;
  quantityHeld: number;
  currentPrice: number;
  priceApiURL: string;
  totalValue: number;
}
