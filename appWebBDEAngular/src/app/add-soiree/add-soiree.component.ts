import { Component, OnInit } from '@angular/core';
import { SoireeService } from '../soiree.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';  // Import des classes nécessaires

@Component({
  selector: 'app-add-soiree',
  standalone: false,
  templateUrl: './add-soiree.component.html',
  styleUrls: ['./add-soiree.component.scss']
})
export class AddSoireeComponent implements OnInit {

  // Formulaire réactif
  soireeForm: FormGroup;

  constructor(private soireeService: SoireeService, private router: Router) {
    // Définition du formulaire réactif
    this.soireeForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      heure: new FormControl('', Validators.required),
      prix: new FormControl('', [Validators.required, Validators.min(0)]),
      capacite: new FormControl('', [Validators.required, Validators.min(1)]),
      theme: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Tu peux effectuer des actions à l'initialisation du composant, si besoin
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.soireeForm.valid) {
      const newSoiree = this.soireeForm.value;
      this.soireeService.addSoiree(newSoiree).subscribe({
        next: (data) => {
          console.log('Soirée ajoutée avec succès :', data);
          this.router.navigate(['/soirees']); // Rediriger vers la liste des soirées
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de la soirée :', err);
        }
      });
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
