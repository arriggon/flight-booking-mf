import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightItemComponent } from './flight-item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [FlightItemComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [FlightItemComponent]
})
export class FlightItemModule { }
