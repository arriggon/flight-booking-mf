import { Component } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight-item';
  flight: Item = {
    fromAirport: 'VIE',
    toAirport: 'OSL',
    departureTime: '16:30',
    flightDuration: 3.5,
    price: 600
  };
}
