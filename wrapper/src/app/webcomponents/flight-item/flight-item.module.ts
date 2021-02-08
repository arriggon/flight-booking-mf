import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightItemComponent } from './flight-item.component';
import { LazyElementsModule } from '@angular-extensions/elements';



@NgModule({
  declarations: [FlightItemComponent],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FlightItemComponent]
})
export class FlightItemModule { }
