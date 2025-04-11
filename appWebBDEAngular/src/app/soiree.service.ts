import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soiree } from './soiree.model';

@Injectable({
  providedIn: 'root'
})
export class SoireeService {
  private apiUrl = 'http://127.0.0.1:8000/api/soirees';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les soirées
  getSoirees(): Observable<Soiree[]> {
    return this.http.get<Soiree[]>(this.apiUrl);
  }

  // Récupérer une seule soirée par ID
  getSoireeById(id: number): Observable<Soiree> {
    return this.http.get<Soiree>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une nouvelle soirée
  addSoiree(soiree: Soiree): Observable<Soiree> {
    return this.http.post<Soiree>(this.apiUrl, soiree);
  }

  // Mettre à jour une soirée existante
  updateSoiree(soiree: Soiree): Observable<Soiree> {
    return this.http.put<Soiree>(`${this.apiUrl}/${soiree.id}`, soiree);
  }

  // Supprimer une soirée
  deleteSoiree(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}