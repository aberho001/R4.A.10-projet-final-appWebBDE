import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { SoireeService } from '../services/soiree.service';
import { Soiree } from '../models/soiree.model';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservation-add',
  standalone: false,
  templateUrl: './reservation-add.component.html',
  styleUrl: './reservation-add.component.scss'
})
export class ReservationAddComponent implements OnInit {
  reservationForm!: FormGroup;
  soirees: Soiree[] = [];
  soireeId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService,
    private soireeService: SoireeService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la soirée depuis l'URL
    this.route.params.subscribe(params => {
      this.soireeId = +params['id'];
    });

    // Initialisation du formulaire
    this.reservationForm = this.fb.group({
      nom_etudiant: ['', Validators.required],
      email_etudiant: ['', [Validators.required, Validators.email]],
      telephone_etudiant: ['', Validators.required],
      date_reservation: [new Date().toISOString().slice(0, 16), Validators.required],
      statut: ['en attente', Validators.required],
      soiree_id: [this.soireeId, Validators.required],
      goodies_attribues: [[]]
    });

    // Charger la liste des soirées
    this.soireeService.getSoirees().subscribe(soirees => {
      this.soirees = soirees;
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation).subscribe(() => {
        // Rediriger vers la page de la soirée après l'ajout
        this.router.navigate(['/soiree', this.soireeId]);
      });
    }
  }

  retour(): void {
    this.router.navigate(['/soiree', this.soireeId]);
  }
}
