import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSoireeComponent } from './list-soiree/list-soiree.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListGoodieComponent } from './list-goodie/list-goodie.component';


const routes: Routes = [
  { path: 'soirees', component: ListSoireeComponent },
  { path: 'reservations', component: ListReservationComponent },
  { path: 'goodies', component: ListGoodieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
