import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightItemModule } from './flight-item/flight-item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { FlightItemComponent } from './flight-item/flight-item.component';

const local = false;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlightItemModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(FlightItemComponent, {injector: this.injector});
    customElements.define('flight-item', element);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {}
}
