import { Component, OnInit } from '@angular/core';
import { Item, ItemChange } from 'src/app/model';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.scss']
})
export class FindPageComponent implements OnInit {
  items: Item[] = [
    {
      fromAirport: 'VIE',
      toAirport: 'OSL',
      departureTime: '16:00',
      flightDuration: 3.5,
      price: 160,
      favorited: false,
      hidden: false
    },
    {
      fromAirport: 'LDN',
      toAirport: 'VIE',
      departureTime: '04:00',
      flightDuration: 2,
      price: 90,
      favorited: false,
      hidden: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onItemChange(itemChange: ItemChange): void {
    console.log(itemChange);
  }
}
