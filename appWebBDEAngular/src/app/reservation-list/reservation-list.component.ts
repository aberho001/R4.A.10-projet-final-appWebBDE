import { Component, OnInit, ViewChild, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})

export class ReservationListComponent implements OnInit {
  @Input() reservations: Reservation[] = [];
  @Input() originPage: string = 'reservations';


  displayedColumns: string[] = ['id', 'nom_etudiant', 'email_etudiant', 'telephone_etudiant', 'date_reservation', 'statut', 'soiree_id', 'actions'];
  dataSource = new MatTableDataSource<Reservation>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reservationService: ReservationService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Si les réservations sont passées par le parent, on les utilise
    this.updateReservations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Si les réservations changent, on met à jour le dataSource
    if (changes['reservations']) {
      this.updateReservations();
    }
  }

  updateReservations(): void {
    if (this.originPage === 'reservations' && this.reservations.length === 0) {
      // Si on est sur la page des réservations et qu'aucune réservation n'est passée en entrée
      this.reservationService.getReservations().subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.cdr.detectChanges();
      });
    } else {
      // Si on est sur une page de soirée ou si des réservations sont passées en entrée
      this.dataSource.data = this.reservations;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges();
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteReservation(reservation: Reservation): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la réservation de ${reservation.nom_etudiant} ?`)) {
      this.reservationService.deleteReservation(reservation.id).subscribe(
        () => {
          this.dataSource.data = this.dataSource.data.filter(item => item.id !== reservation.id);
          console.log('Réservation supprimée:', reservation);
        },
        (error) => {
          console.error('Erreur lors de la suppression de la réservation:', error);
        }
      );
    }
  }
}
