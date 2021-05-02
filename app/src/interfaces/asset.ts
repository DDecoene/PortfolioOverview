export interface Asset {
  id: number;
  symbol: string;
  name: string;
  market: string;
  quantityHeld: number;
  totalInvestment: number;
  priceApiURL: string;
  datePurchased: Date;
}
