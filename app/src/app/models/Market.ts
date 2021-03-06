import { IMarket } from 'src/app/interfaces/market';

export class Market implements IMarket {
  id: number;
  symbol: string;
  name: string;
  marketUrl: string;
}
