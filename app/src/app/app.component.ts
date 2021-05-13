import { Component } from '@angular/core';
import { CoinListService } from 'src/services/coinlist.service';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Portfolio Overview';

  constructor(
    private configService: ConfigService, // This makes sure there is a default config as soon as the app loads
    private coinListService: CoinListService // This makes sure the coin list is updated and stored as soon as the app loads
  ) {}
}
