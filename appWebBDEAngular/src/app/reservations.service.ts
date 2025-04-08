import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  getReservations() {
    return this.http.get('http://localhost:8000/api/reservations');
  }

  getReservation(id: number) {
    return this.http.get(`http://localhost:8000/api/reservations/${id}`);
  }

  createReservation(reservation: any) {
    return this.http.post('http://localhost:8000/api/reservations', reservation);
  }

  updateReservation(id: number, reservation: any) {
    return this.http.put(`http://localhost:8000/api/reservations/${id}`, reservation);
  }

  deleteReservation(id: number) {
    return this.http.delete(`http://localhost:8000/api/reservations/${id}`);
  }

}
