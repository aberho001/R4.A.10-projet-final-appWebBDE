import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSoireeComponent } from './list-soiree/list-soiree.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListGoodieComponent } from './list-goodie/list-goodie.component';
import { SoireeComponent } from './soiree/soiree.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GoodieComponent } from './goodie/goodie.component';
import { AddSoireeComponent } from './add-soiree/add-soiree.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { AddGoodieComponent } from './add-goodie/add-goodie.component';
import { EditSoireeComponent } from './edit-soiree/edit-soiree.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { EditGoodieComponent } from './edit-goodie/edit-goodie.component';


const routes: Routes = [
  { path: 'soirees/ajouter', component: AddSoireeComponent },
  { path: 'soirees/modifier/:id', component: EditSoireeComponent },
  { path: 'soirees/:id', component: SoireeComponent },
  { path: 'soirees', component: ListSoireeComponent },

  { path: 'reservations/ajouter', component: AddReservationComponent },
  { path: 'reservations/modifier/:id', component: EditReservationComponent },
  { path: 'reservations/:id', component: ReservationComponent },
  { path: 'reservations', component: ListReservationComponent },

  { path: 'goodies/ajouter', component: AddGoodieComponent },
  { path: 'goodies/modifier/:id', component: EditGoodieComponent },
  { path: 'goodies/:id', component: GoodieComponent },
  { path: 'goodies', component: ListGoodieComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
