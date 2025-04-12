import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';
import { SoireeService } from '../soiree.service';
import { Soiree } from '../soiree.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-list-reservation',
  standalone: false,
  templateUrl: './list-reservation.component.html',
  styleUrl: './list-reservation.component.scss'
})
export class ListReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  soireesMap: Map<number, Soiree> = new Map();
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'soiree', 'statut', 'date_reservation'];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private reservationservice: ReservationService,
    private soireeService: SoireeService
  ) {}

  ngOnInit(): void {
    forkJoin({
      reservations: this.reservationservice.getReservations(),
      soirees: this.soireeService.getSoirees()
    }).subscribe({
      next: ({ reservations, soirees }) => {
        this.reservations = reservations;
        this.dataSource.data = this.reservations;

        // Construire une map des soirées
        soirees.forEach(soiree => this.soireesMap.set(soiree.id, soiree));
      },
      error: (err) => {
        console.error('Erreur lors du chargement des données :', err);
      }
    });
  }

  getSoireeName(id: number): string {
    return this.soireesMap.get(id)?.nom ?? 'Inconnue';
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
