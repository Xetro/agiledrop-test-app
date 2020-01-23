import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Company } from './companies-list/companies-list.component';
import { CompanyEvent } from './events/events.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(environment.serverUrl + `/api/companies`);
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(environment.serverUrl + `/api/companies/${id}`);
  }

  getEvents(id: string): Observable<CompanyEvent[]> {
    return this.http.get<CompanyEvent[]>(environment.serverUrl + `/api/companies/${id}/events`);
  }
}
