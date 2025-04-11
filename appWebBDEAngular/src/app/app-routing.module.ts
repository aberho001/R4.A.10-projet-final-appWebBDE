import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSoireeComponent } from './list-soiree/list-soiree.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListGoodieComponent } from './list-goodie/list-goodie.component';
import { SoireeComponent } from './soiree/soiree.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GoodieComponent } from './goodie/goodie.component';


const routes: Routes = [
  { path: 'soirees', component: ListSoireeComponent },
  { path: 'reservations', component: ListReservationComponent },
  { path: 'goodies', component: ListGoodieComponent },
  { path: 'soirees/:id', component: SoireeComponent },
  { path: 'reservations/:id', component: ReservationComponent },
  { path: 'goodies/:id', component: GoodieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
