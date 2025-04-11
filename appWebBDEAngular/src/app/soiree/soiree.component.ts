import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoireeService } from '../soiree.service';
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-soiree',
  standalone: false,
  templateUrl: './soiree.component.html',
  styleUrls: ['./soiree.component.scss']
})
export class SoireeComponent implements OnInit {
  soiree: Soiree | null = null;
  errorMessage: string | null = null;

  constructor(private soireeService: SoireeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.soireeService.getSoireeById(id).subscribe({
      next: (data) => {
        if (data) {
          this.soiree = data;
          this.errorMessage = null; // Réinitialiser l'erreur en cas de succès
        } else {
          this.soiree = null;
          this.errorMessage = 'Cette soirée n\'existe pas.';
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la soirée :', err);
        this.soiree = null;
        this.errorMessage = 'Cette soirée n\'existe pas.';
      }
    });
  }
}
