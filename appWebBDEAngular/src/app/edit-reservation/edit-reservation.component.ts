import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';
import { SoireeService } from '../soiree.service';
import { Reservation } from '../reservation.model';
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-edit-reservation',
  standalone: false,
  templateUrl: './edit-reservation.component.html',
  styleUrl: './edit-reservation.component.scss'
})
export class EditReservationComponent implements OnInit {

  reservationForm: FormGroup;
  reservationId: number = 0;
  soirees: Soiree[] = [];

  constructor(
    private reservationService: ReservationService,
    private soireeService: SoireeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.reservationForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', Validators.required),
      id_soiree: new FormControl('', Validators.required),
      statut: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.reservationId = Number(this.route.snapshot.paramMap.get('id'));

    this.soireeService.getSoirees().subscribe({
      next: (data) => {
        this.soirees = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des soirées :', err);
      }
    });

    this.reservationService.getReservationById(this.reservationId).subscribe({
      next: (data: Reservation) => {
        this.reservationForm.patchValue(data);
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la réservation :', err);
        alert("Erreur lors du chargement de la réservation.");
      }
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const updatedReservation = this.reservationForm.value;
      this.reservationService.updateReservation(this.reservationId, updatedReservation).subscribe({
        next: () => {
          alert('Réservation modifiée avec succès !');
          this.router.navigate(['/reservations']);
        },
        error: (err) => {
          console.error('Erreur lors de la modification :', err);
          alert('Erreur lors de la modification.');
        }
      });
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
