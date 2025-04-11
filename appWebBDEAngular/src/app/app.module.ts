import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SoireeComponent } from './soiree/soiree.component';
import { ListSoireeComponent } from './list-soiree/list-soiree.component';
import { AddSoireeComponent } from './add-soiree/add-soiree.component';
import { EditSoireeComponent } from './edit-soiree/edit-soiree.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { GoodieComponent } from './goodie/goodie.component';
import { ListGoodieComponent } from './list-goodie/list-goodie.component';
import { AddGoodieComponent } from './add-goodie/add-goodie.component';
import { EditGoodieComponent } from './edit-goodie/edit-goodie.component';
import { MatTableModule } from '@angular/material/table';  // Import du module du tableau
import { MatPaginatorModule } from '@angular/material/paginator';  // Pour la pagination
import { MatSortModule } from '@angular/material/sort';  // Pour le tri
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Nécessaire pour les animations

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoireeComponent,
    ListSoireeComponent,
    AddSoireeComponent,
    EditSoireeComponent,
    ReservationComponent,
    ListReservationComponent,
    AddReservationComponent,
    EditReservationComponent,
    GoodieComponent,
    ListGoodieComponent,
    AddGoodieComponent,
    EditGoodieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
