import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get<any>(environment.serverUrl + `/api/companies`);
  }

  getCompany(id: string): Observable<any> {
    return this.http.get<any>(environment.serverUrl + `/api/companies/${id}`);
  }

  getEvents(id: string): Observable<any> {
    return this.http.get<any>(environment.serverUrl + `/api/companies/${id}/events`);
  }
}
