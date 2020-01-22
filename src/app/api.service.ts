import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://angular-test-backend.dev2.agiledrop.com/api';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/companies`);
  }

  getCompany(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/companies/${id}`);
  }

  getEvents(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/companies/${id}/events`);
  }
}
