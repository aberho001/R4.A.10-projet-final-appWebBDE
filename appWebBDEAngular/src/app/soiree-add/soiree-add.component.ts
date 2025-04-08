import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoireeService } from '../services/soiree.service';
import { Router } from '@angular/router';
import { Soiree } from '../models/soiree.model';

@Component({
  selector: 'app-soiree-add',
  standalone: false,
  templateUrl: './soiree-add.component.html',
  styleUrl: './soiree-add.component.scss'
})
export class SoireeAddComponent implements OnInit {
  soireeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private soireeService: SoireeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.soireeForm = this.formBuilder.group({
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      date_heure: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      capacite_max: ['', [Validators.required, Validators.min(1)]],
      theme: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.soireeForm.valid) {
      const newSoiree: Soiree = {
        id: 0, // L'ID sera généré par le backend
        nom: this.soireeForm.value.nom,
        lieu: this.soireeForm.value.lieu,
        date_heure: this.soireeForm.value.date_heure,
        prix: this.soireeForm.value.prix,
        capacite_max: this.soireeForm.value.capacite_max,
        theme: this.soireeForm.value.theme
      };

      this.soireeService.addSoiree(newSoiree).subscribe(
        (response) => {
          console.log('Soirée créée avec succès:', response);
          this.router.navigate(['/soiree']);
        },
        (error) => {
          console.error('Erreur lors de la création de la soirée:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/soiree']);
  }
}
