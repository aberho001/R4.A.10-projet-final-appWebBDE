import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReservationService } from '../reservation.service'; 
import { Reservation } from '../reservation.model';

@Component({
  selector: 'app-list-reservation',
  standalone: false,
  templateUrl: './list-reservation.component.html',
  styleUrl: './list-reservation.component.scss'
})
export class ListReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'id_soiree', 'statut', 'date_reservation'];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private reservationservice: ReservationService) {}

  ngOnInit(): void {
    this.reservationservice.getReservations().subscribe({
      next: (data) => {
        this.reservations = data;
        this.dataSource.data = this.reservations;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des reservations :', err);
      }
    });
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}
