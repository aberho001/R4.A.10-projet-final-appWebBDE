import { Component, OnInit } from '@angular/core';
import { SoireeService, Soiree } from '../soirees.service';;

@Component({
  selector: 'app-liste-soiree',
  standalone: false,
  templateUrl: './liste-soiree.component.html',
  styleUrl: './liste-soiree.component.scss'
})
export class ListeSoireeComponent implements OnInit {
  soirees: Soiree[] = [];
  displayedColumns: string[] = ['nom', 'lieu', 'date', 'heure', 'prix', 'capacite', 'theme'];

  constructor(private soireeService: SoireeService) {}

  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe((data) => {
      this.soirees = data;
    });
  }
}
