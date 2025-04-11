import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent  implements OnInit {
  reservation: Reservation | null = null;
  errorMessage: string | null = null;

  constructor(private reservationservice: ReservationService, private route: ActivatedRoute, private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.reservationservice.getReservationById(id).subscribe({
      next: (data) => {
        if (data) {
          this.reservation = data;
          this.errorMessage = null; // Réinitialiser l'erreur en cas de succès
        } else {
          this.reservation = null;
          this.errorMessage = 'Cette reservation n\'existe pas.';
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la reservation :', err);
        this.reservation = null;
        this.errorMessage = 'Cette reservation n\'existe pas.';
      }
    });
  }
  onEdit(): void {
    if (this.reservation) {
      this.router.navigate([`/reservations/modifier/${this.reservation.id}`]);
    } else {
      console.error("La reservation est introuvable !");
      alert("La reservation est introuvable.");
    }
  }
  

  onDelete(): void {
    if (this.reservation) {
      const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cette reservation ?');
      if (confirmation) {
        this.reservationservice.deleteReservation(this.reservation.id).subscribe({
          next: () => {
            alert('Reservation supprimée avec succès !');
            this.router.navigate(['/reservations']);
          },
          error: (err) => {
            console.error('Erreur lors de la suppression :', err);
            alert('Erreur lors de la suppression.');
          }
        });
      }
    } else {
      console.error("La reservation est introuvable !");
      alert("La reservation est introuvable.");
    }
  }
  
}
