import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  displayedColumns: string[] = ['nom', 'lieu', 'date', 'prix', 'capacite', 'theme'];
  dataSource = new MatTableDataSource<Soiree>(this.soirees);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private soireeService: SoireeService) {}

  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe({
      next: (data) => {
        this.soirees = data;
        this.dataSource.data = this.soirees;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des soirées :', err);
      }
    });
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}
