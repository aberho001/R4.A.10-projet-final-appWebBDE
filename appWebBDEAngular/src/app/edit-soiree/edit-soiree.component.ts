import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoireeService } from '../soiree.service';
import { FormBuilder } from '@angular/forms';
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-edit-soiree',
  standalone: false,
  templateUrl: './edit-soiree.component.html',
  styleUrls: ['./edit-soiree.component.scss']
})
export class EditSoireeComponent implements OnInit {
  soireeForm!: FormGroup;
  soireeId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private soireeService: SoireeService
  ) {}

  ngOnInit(): void {
    this.soireeForm = this.fb.group({
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      capacite: [1, [Validators.required, Validators.min(1)]],
      theme: ['', Validators.required],
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.soireeId = +idParam;

        this.soireeService.getSoireeById(this.soireeId).subscribe({
          next: (soiree) => {
            this.soireeForm.patchValue(soiree);
          },
          error: (err) => {
            console.error("Erreur de chargement :", err);
            alert("Erreur lors du chargement de la soirée.");
            this.router.navigate(['/soirees']);
          }
        });
      } else {
        console.error("ID de soirée manquant dans l'URL !");
        alert("Aucune soirée sélectionnée.");
        this.router.navigate(['/soirees']);
      }
    });
  }

  onSubmit(): void {

    if (!this.soireeId) {
      console.error("Soirée ID non défini !");
      alert("ID de la soirée manquant.");
      return;
    }

    if (this.soireeForm.valid) {
      let soireeData = { ...this.soireeForm.value };

      // Assure que l'heure est au bon format HH:mm
      if (typeof soireeData.heure === 'string') {
        const [h, m] = soireeData.heure.split(':');
        soireeData.heure = `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
      }

      this.soireeService.updateSoiree(this.soireeId, soireeData).subscribe({
        next: () => {
          alert('Soirée mise à jour avec succès !');
          this.router.navigate(['/soirees']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour :', err);
          alert('Erreur lors de la mise à jour.');
        }
      });
    } else {
      this.soireeForm.markAllAsTouched();
    }
  }
}