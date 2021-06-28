import { Component } from '@angular/core';
import { CoinListService } from 'src/app/services/coinlist.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio Overview';

  constructor(
    private coinListService: CoinListService // This makes sure the coin list is updated and stored as soon as the app loads
  ) {}
}
