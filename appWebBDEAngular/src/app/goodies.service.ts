import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodiesService {

  constructor(private http: HttpClient) { }

  getGoodies() {
    return this.http.get('http://localhost:8000/api/goodies');
  }

  getGoodie(id: number) {
    return this.http.get(`http://localhost:8000/api/goodies/${id}`);
  }

  createGoodie(goodie: any) {
    return this.http.post('http://localhost:8000/api/goodies', goodie);
  }

  updateGoodie(id: number, goodie: any) {
    return this.http.put(`http://localhost:8000/api/goodies/${id}`, goodie);
  }

  deleteGoodie(id: number) {
    return this.http.delete(`http://localhost:8000/api/goodies/${id}`);
  }

}
