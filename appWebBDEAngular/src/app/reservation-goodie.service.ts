import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationGoodie } from './reservation-goodie.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationGoodieService {
private apiUrl = 'http://127.0.0.1:8000/reservation-goodies';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les Reservation
  getReservationGoodies(): Observable<ReservationGoodie[]> {
    return this.http.get<ReservationGoodie[]>(this.apiUrl);
  }

  // Récupérer une seule Reservation par ID
  getReservationGoodieById(id: number): Observable<ReservationGoodie> {
    return this.http.get<ReservationGoodie>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une nouvelle Reservation
  addReservationGoodie(reservationGoodie: ReservationGoodie): Observable<ReservationGoodie> {
    return this.http.post<ReservationGoodie>(this.apiUrl, reservationGoodie);
  }

  // Mettre à jour une Reservation existante
  uodateReservationGoodie(reservationGoodie: ReservationGoodie): Observable<ReservationGoodie> {
    return this.http.put<ReservationGoodie>(`${this.apiUrl}/${reservationGoodie.id}`, reservationGoodie);
  }

  // Supprimer une Reservation
  deleteReservationGoodie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
