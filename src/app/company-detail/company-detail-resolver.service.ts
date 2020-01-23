import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment';
import { Observable, of, EMPTY, forkJoin } from 'rxjs';
import { take, mergeMap, map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { CompanyEvent } from '../events/events.component';
import { Company } from '../companies-list/companies-list.component';

export interface DetailResponse {
  company: Company;
  events: CompanyEvent[];
}

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailResolverService {

  constructor(private api: ApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const id = route.paramMap.get('id');

    return forkJoin(
      this.api.getCompany(id),
      this.api.getEvents(id),
    ).pipe(
      take(1),
      mergeMap(([company, events]) => {
        if (company && events) {
          return of([company, events]).pipe(map(this.mapData));
        } else {
          this.router.navigate(['/error-page']);
          return EMPTY;
        }
      })
    );
  }

  mapData([company, events]): DetailResponse {
    events = events.map(event => {
      event.event_date = moment(event.event_date, 'ddd, MM/DD/YYYY - HH:mm').toDate();
      return event;
    });

    const data: DetailResponse = {
      company: company[0],
      events,
    };

    return data;
  }
}
