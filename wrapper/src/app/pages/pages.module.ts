import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPageComponent } from './find-page/find-page.component';
import { FlightItemModule } from '../webcomponents/flight-item/flight-item.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [FindPageComponent],
  imports: [
    CommonModule,
    FlightItemModule,
    MatExpansionModule
  ]
})
export class PagesModule { }
