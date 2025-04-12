import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { SoireeService } from '../soiree.service';
import { Reservation } from '../reservation.model';
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {
  reservation: Reservation | null = null;
  soiree: Soiree | null = null;
  errorMessage: string | null = null;

  constructor(
    private reservationservice: ReservationService,
    private soireeService: SoireeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.reservationservice.getReservationById(id).subscribe({
      next: (data) => {
        if (data) {
          this.reservation = data;
          this.errorMessage = null;

          // Charger la soirée associée
          this.soireeService.getSoireeById(data.id_soiree).subscribe({
            next: (s) => this.soiree = s,
            error: () => this.soiree = null
          });

        } else {
          this.reservation = null;
          this.errorMessage = 'Cette réservation n\'existe pas.';
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la réservation :', err);
        this.reservation = null;
        this.errorMessage = 'Cette réservation n\'existe pas.';
      }
    });
  }

  onEdit(): void {
    if (this.reservation) {
      this.router.navigate([`/reservations/modifier/${this.reservation.id}`]);
    } else {
      alert("La réservation est introuvable.");
    }
  }

  onDelete(): void {
    if (this.reservation) {
      const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?');
      if (confirmation) {
        this.reservationservice.deleteReservation(this.reservation.id).subscribe({
          next: () => {
            alert('Réservation supprimée avec succès !');
            this.router.navigate(['/reservations']);
          },
          error: (err) => {
            console.error('Erreur lors de la suppression :', err);
            alert('Erreur lors de la suppression.');
          }
        });
      }
    } else {
      alert("La réservation est introuvable.");
    }
  }
}
