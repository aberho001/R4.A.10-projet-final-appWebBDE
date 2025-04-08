import { Component, OnInit } from '@angular/core';
import { SoireeService } from '../services/soiree.service';
import { Soiree } from '../models/soiree.model';

@Component({
  selector: 'app-soiree-list',
  standalone: false,
  templateUrl: './soiree-list.component.html',
  styleUrls: ['./soiree-list.component.scss']
})
export class SoireeListComponent implements OnInit {
  soirees: Soiree[] = [];

  constructor(private soireeService: SoireeService) { }

  ngOnInit(): void {
    this.loadSoirees();
  }

  // Charger la liste des soirées
  loadSoirees(): void {
    this.soireeService.getSoirees().subscribe((data: Soiree[]) => {
      this.soirees = data;
    });
  }

}
