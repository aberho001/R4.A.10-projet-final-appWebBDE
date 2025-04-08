import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Soiree {
  id: number;
  nom: string;
  lieu: string;
  date: string;
  heure: string;
  prix: number;
  capacite: number;
  theme: string;
}

@Injectable({
  providedIn: 'root',
})
export class SoireeService {
  private apiUrl = 'http://localhost:8000/api/soirees';

  constructor(private http: HttpClient) {}

  getSoirees(): Observable<Soiree[]> {
    return this.http.get<Soiree[]>(this.apiUrl);
  }

  getSoiree(id: number): Observable<Soiree> {
    return this.http.get<Soiree>(`${this.apiUrl}/${id}`);
  }

  createSoiree(soiree: Soiree): Observable<Soiree> {
    return this.http.post<Soiree>(this.apiUrl, soiree);
  }

  updateSoiree(id: number, soiree: Soiree): Observable<Soiree> {
    return this.http.put<Soiree>(`${this.apiUrl}/${id}`, soiree);
  }

  deleteSoiree(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
