import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://example.com/api/vehicles';

  constructor(private http: HttpClient) { }

  getVehicle(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addVehicle(vehicle: any): Observable<any> {
    return this.http.post(this.apiUrl, vehicle);
  }

  updateVehicle(vehicle: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${vehicle.id}`, vehicle);
  }
}
