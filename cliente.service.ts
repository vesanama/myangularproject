import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://example.com/api/clientes';

  constructor(private http: HttpClient) { }

  addCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
