import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SoireeService } from '../soiree.service'; 
import { Soiree } from '../soiree.model';

@Component({
  selector: 'app-list-soiree',
  standalone: false,
  templateUrl: './list-soiree.component.html',
  styleUrls: ['./list-soiree.component.scss']
})
export class ListSoireeComponent implements OnInit {
  soirees: Soiree[] = [];
  displayedColumns: string[] = ['nom', 'lieu', 'date', 'heure', 'prix', 'capacite', 'theme'];
  dataSource = new MatTableDataSource<Soiree>(this.soirees);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private soireeService: SoireeService) {}

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe((soirees) => {
      this.soirees = soirees;
      this.dataSource = new MatTableDataSource(this.soirees);
      this.dataSource.paginator = this.paginator ?? null;
      this.dataSource.sort = this.sort ?? null;
  
      this.dataSource.filterPredicate = (data, filter) => {
        const dataStr = `${data.nom} ${data.lieu} ${data.date} ${data.heure} ${data.prix} ${data.capacite} ${data.theme}`.toLowerCase();
        return dataStr.includes(filter);
      };
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
