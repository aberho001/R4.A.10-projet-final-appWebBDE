import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoireeService } from '../services/soiree.service';
import { Soiree } from '../models/soiree.model';

@Component({
  selector: 'app-soiree-edit',
  templateUrl: './soiree-edit.component.html',
  styleUrls: ['./soiree-edit.component.scss'],
  standalone: false
})
export class SoireeEditComponent implements OnInit {
  soireeForm!: FormGroup;
  soireeId!: number;
  originPage!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private soireeService: SoireeService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la soirée
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.soireeId = Number(id);
    }

    // Initialiser le formulaire
    this.soireeForm = this.fb.group({
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      capacite_max: ['', [Validators.required, Validators.min(1)]],
      date_heure: ['', Validators.required],
      theme: [''],
    });

    // Récupérer la page d’origine si elle existe dans les query params
    this.route.queryParams.subscribe(params => {
      this.originPage = params['from'] || 'soirees';
    });

    // Charger les infos de la soirée si on est en mode édition
    if (this.soireeId) {
      this.soireeService.getSoireeById(this.soireeId).subscribe(soiree => {
        this.soireeForm.patchValue(soiree);
      });
    }
  }

  revenirAnciennePage(): void {
    this.router.navigate([`/${this.originPage}`]); // Redirection vers la page d'origine
  }

  onSubmit(): void {
    // Vérifier que le formulaire est valide
    if (this.soireeForm.valid) {
      const soiree: Soiree = this.soireeForm.value;
      soiree.id = this.soireeId;  // Ajouter l'ID à l'objet soirée avant de le soumettre

      // Envoyer la requête de mise à jour de la soirée
      this.soireeService.updateSoiree(soiree).subscribe(
        () => {
          console.log('Soirée mise à jour avec succès');
          this.revenirAnciennePage(); // Redirection après la mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la soirée', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}
