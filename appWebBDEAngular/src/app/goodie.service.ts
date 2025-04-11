import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goodie } from './goodie.model';

@Injectable({
  providedIn: 'root'
})
export class GoodieService {
 private apiUrl = 'http://127.0.0.1:8000/api/goodies';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les soirées
  getGoodies(): Observable<Goodie[]> {
    return this.http.get<Goodie[]>(this.apiUrl);
  }

  // Récupérer une seule soirée par ID
  getGoodieById(id: number): Observable<Goodie> {
    return this.http.get<Goodie>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une nouvelle soirée
  addGoodie(goodie: Goodie): Observable<Goodie> {
    return this.http.post<Goodie>(this.apiUrl, goodie);
  }

  // Mettre à jour une soirée existante
  updateGoodie(goodie: Goodie): Observable<Goodie> {
    return this.http.put<Goodie>(`${this.apiUrl}/${goodie.id}`, goodie);
  }

  // Supprimer une soirée
  deleteGoodie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
