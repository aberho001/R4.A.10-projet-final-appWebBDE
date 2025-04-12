import { ActivatedRoute, Router } from '@angular/router';
import { SoireeService } from '../soiree.service';
import { Soiree } from '../soiree.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-soiree',
  standalone: false,
  templateUrl: './soiree.component.html',
  styleUrls: ['./soiree.component.scss']
})
export class SoireeComponent implements OnInit {
  soiree: Soiree | null = null;
  errorMessage: string | null = null;
  reservations: Reservation[] = [];
  soireesMap: Map<number, Soiree> = new Map();
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'soiree', 'statut', 'date_reservation'];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private reservationservice: ReservationService, private soireeService: SoireeService, private route: ActivatedRoute, private router: Router,
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

    forkJoin({
      reservations: this.reservationservice.getReservationsBySoireeId(id),
      soirees: this.soireeService.getSoirees()
    }).subscribe({
      next: ({ reservations, soirees }) => {
        this.reservations = reservations;
        this.dataSource.data = this.reservations;

        // Construire une map des soirées
        soirees.forEach(soiree => this.soireesMap.set(soiree.id, soiree));
      },
      error: (err) => {
        console.error('Erreur lors du chargement des données :', err);
      }
    });
  }
  onEdit(): void {
    if (this.soiree) {
      this.router.navigate([`/soirees/modifier/${this.soiree.id}`]);
    } else {
      console.error("La soirée est introuvable !");
      alert("La soirée est introuvable.");
    }
  }
  
  getSoireeName(id: number): string {
    return this.soireesMap.get(id)?.nom ?? 'Inconnue';
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
  
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}
