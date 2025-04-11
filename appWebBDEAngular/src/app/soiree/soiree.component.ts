import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private soireeService: SoireeService, private route: ActivatedRoute, private router: Router,
  ) {}

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
  onEdit(): void {
    if (this.soiree) {
      this.router.navigate([`/soirees/edit/${this.soiree.id}`]);
    } else {
      console.error("La soirée est introuvable !");
      alert("La soirée est introuvable.");
    }
  }
  

  onDelete(): void {
    if (this.soiree) {
      const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cette soirée ?');
      if (confirmation) {
        this.soireeService.deleteSoiree(this.soiree.id).subscribe({
          next: () => {
            alert('Soirée supprimée avec succès !');
            this.router.navigate(['/soirees']);
          },
          error: (err) => {
            console.error('Erreur lors de la suppression :', err);
            alert('Erreur lors de la suppression.');
          }
        });
      }
    } else {
      console.error("La soirée est introuvable !");
      alert("La soirée est introuvable.");
    }
  }
  
}
