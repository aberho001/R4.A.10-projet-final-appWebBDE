import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoireeComponent } from './soiree/soiree.component';
import { ListeSoireeComponent } from './liste-soiree/liste-soiree.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { GoodieComponent } from './goodie/goodie.component';
import { ListeGoodieComponent } from './liste-goodie/liste-goodie.component';

@NgModule({
  declarations: [
    AppComponent,
    SoireeComponent,
    ListeSoireeComponent,
    ReservationComponent,
    ListeReservationComponent,
    GoodieComponent,
    ListeGoodieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
