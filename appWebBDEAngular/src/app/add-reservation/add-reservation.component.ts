import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SoireeService } from '../soiree.service';
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-add-reservation',
  standalone: false,
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'] // Correction ici
})
export class AddReservationComponent implements OnInit {

  reservationForm: FormGroup;
  soirees: Soiree[] = [];

  constructor(
    private reservationservice: ReservationService,
    private soireeService: SoireeService,
    private router: Router
  ) {
    this.reservationForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', Validators.required),
      id_soiree: new FormControl('', Validators.required),
      statut: new FormControl('en_attente', Validators.required),
    });
  }

  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe({
      next: (data) => this.soirees = data,
      error: (err) => console.error('Erreur lors du chargement des soirées', err)
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      this.reservationservice.addReservation(this.reservationForm.value).subscribe({
        next: () => this.router.navigate(['/reservations']),
        error: (err) => console.error('Erreur lors de l\'ajout de la réservation :', err)
      });
    }
  }
}

