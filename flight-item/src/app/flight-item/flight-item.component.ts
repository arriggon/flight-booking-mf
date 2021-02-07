import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../model/item';
import { ItemChange } from '../model/item-change';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {
  @Input() dataFromParent: Item;
  @Output() emitDataToParent = new EventEmitter<ItemChange>();

  constructor() { }

  ngOnInit(): void {
  }

  openDetail(): void {
    this.emitDataToParent.emit({detailOpened: true});
  }

  favorite(): void {
    this.emitDataToParent.emit({favorited: true});
  }

  hide(): void {
    this.emitDataToParent.emit({hidden: true});
  }

  formatDuration(duration: number): string {
    const minutes = (duration % 1) * 60;
    const hours = duration - (duration % 1);
    return `${hours}:${minutes}h`;
  }
}
