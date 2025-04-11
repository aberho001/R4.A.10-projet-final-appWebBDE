import { Component } from '@angular/core';

@Component({
  selector: 'app-list-soiree',
  standalone: false,
  templateUrl: './list-soiree.component.html',
  styleUrls: ['./list-soiree.component.scss']
})
export class ListSoireeComponent {
  soirees = [
    {
      id: 1,
      nom: 'Soirée de lancement',
      lieu: 'Salle des fêtes',
      date: '2025-05-01',
      heure: '20:00:00',
      prix: 15.00,
      capacite: 100,
      theme: 'Lancement du BDE'
    },
    {
      id: 2,
      nom: 'Soirée Halloween',
      lieu: 'Club le 8',
      date: '2025-10-31',
      heure: '22:00:00',
      prix: 10.00,
      capacite: 200,
      theme: 'Halloween'
    }
  ];
}
