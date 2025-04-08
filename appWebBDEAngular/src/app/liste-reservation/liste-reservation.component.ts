import { Component, OnInit } from '@angular/core';
import { ReservationsService, Reservation } from '../reservations.service';

@Component({
  selector: 'app-liste-reservation',
  standalone: false,
  templateUrl: './liste-reservation.component.html',
  styleUrl: './liste-reservation.component.scss'
})
export class ListeReservationComponent {
  reservations: Reservation[] = [];
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'statut', 'date_reservation'];


  constructor(private reservationService: ReservationsService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }
}
