import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FLIGHT_ITEM_ADDRESS } from 'src/app/address.config';
import { Item, ItemChange } from 'src/app/model';

@Component({
  selector: 'app-flight-item',
  template: `
    <flight-item *axLazyElement="link" (emitDataToParent)="flightItemChanged($event)" [dataFromParent]="flightItem"></flight-item>
  `,
  styles: [
  ]
})
export class FlightItemComponent implements OnInit {
  link: string = FLIGHT_ITEM_ADDRESS;
  @Input() flightItem: Item;
  @Output() flightItemChangedEmitter = new EventEmitter<ItemChange>();

  constructor() { }

  ngOnInit(): void {
  }

  flightItemChanged($event: CustomEvent): void {
    this.flightItemChangedEmitter.emit($event.detail);
  }

}
