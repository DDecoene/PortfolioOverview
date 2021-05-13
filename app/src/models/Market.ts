import { IMarket } from 'src/interfaces/market';

export class Market implements IMarket {
  id: string;
  name: string;
  marketUrl: string;
}
