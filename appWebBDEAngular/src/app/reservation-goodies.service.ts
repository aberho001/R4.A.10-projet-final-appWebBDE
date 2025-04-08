import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationGoodiesService {

  constructor(private http: HttpClient) { }

  getReservationsGoodies() {
    return this.http.get('http://localhost:8000/api/reservation_goodies');
  }

  getReservationGoodie(id: number) {
    return this.http.get(`http://localhost:8000/api/reservation_goodies/${id}`);
  }

  createReservationGoodie(reservationGoodie: any) {
    return this.http.post('http://localhost:8000/api/reservation_goodies', reservationGoodie);
  }

  updateReservationGoodie(id: number, reservationGoodie: any) {
    return this.http.put(`http://localhost:8000/api/reservation_goodies/${id}`, reservationGoodie);
  }

  deleteReservationGoodie(id: number) {
    return this.http.delete(`http://localhost:8000/api/reservation_goodies/${id}`);
  }
  
}
