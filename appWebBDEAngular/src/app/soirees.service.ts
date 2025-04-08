import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoireesService {

  constructor(private http: HttpClient) { }

  getSoirees() {
    return this.http.get('http://localhost:8000/api/soirees');
  }

  getSoiree(id: number) {
    return this.http.get(`http://localhost:8000/api/soirees/${id}`);
  }

  createSoiree(soiree: any) {
    return this.http.post('http://localhost:8000/api/soirees', soiree);
  }

  updateSoiree(id: number, soiree: any) {
    return this.http.put(`http://localhost:8000/api/soirees/${id}`, soiree);
  }

  deleteSoiree(id: number) {
    return this.http.delete(`http://localhost:8000/api/soirees/${id}`);
  }
  
}
