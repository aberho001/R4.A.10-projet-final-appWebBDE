import { Component, OnInit } from '@angular/core';
import { SoireeService } from '../soiree.service'; // Assurez-vous que le service est bien importé
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-list-soiree',
  standalone: false,
  templateUrl: './list-soiree.component.html',
  styleUrls: ['./list-soiree.component.scss']
})
export class ListSoireeComponent implements OnInit {
  soirees: Soiree[] = [];

  constructor(private soireeService: SoireeService) {}

  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe({
      next: (data) => {
        this.soirees = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des soirées :', err);
      }
    });
  }
}
