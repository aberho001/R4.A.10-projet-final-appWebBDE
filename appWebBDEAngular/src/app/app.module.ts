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
import { AjouterGoodieComponent } from './ajouter-goodie/ajouter-goodie.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';
import { AjouterSoireeComponent } from './ajouter-soiree/ajouter-soiree.component';
import { ModifierSoireeComponent } from './modifier-soiree/modifier-soiree.component';
import { ModifierReservationComponent } from './modifier-reservation/modifier-reservation.component';
import { ModifierGoodieComponent } from './modifier-goodie/modifier-goodie.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SoireeService } from './soirees.service';


@NgModule({
  declarations: [
    AppComponent,
    SoireeComponent,
    ListeSoireeComponent,
    ReservationComponent,
    ListeReservationComponent,
    GoodieComponent,
    ListeGoodieComponent,
    AjouterGoodieComponent,
    AjouterReservationComponent,
    AjouterSoireeComponent,
    ModifierSoireeComponent,
    ModifierReservationComponent,
    ModifierGoodieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [SoireeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
