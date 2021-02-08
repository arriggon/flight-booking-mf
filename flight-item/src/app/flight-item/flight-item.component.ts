import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from '../model/item';
import { ItemChange } from '../model/item-change';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit, OnChanges {
  @Input() dataFromParent: Item;
  @Output() emitDataToParent = new EventEmitter<ItemChange>();
  loaded: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.loaded) {
      this.loaded = true;
      this.ngOnInit();
    }
  }

  ngOnInit(): void {
    if (this.loaded) {
      console.log('Flight Item Component started.');
    }
  }

  openDetail(): void {
    this.emitDataToParent.emit({detailOpened: true});
  }

  favorite($event): void {
    $event.stopPropagation();
    this.emitDataToParent.emit({favorited: true});
  }

  hide($event): void {
    $event.stopPropagation();
    this.emitDataToParent.emit({hidden: true});
  }

  formatDuration(duration: number): string {
    const minutes = (duration % 1) * 60;
    const hours = duration - (duration % 1);
    return `${hours}:${minutes}h`;
  }
}
