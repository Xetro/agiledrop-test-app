import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ApiService } from '../api.service';
import { Observable, of, EMPTY, forkJoin } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

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
          return of([company, events]);
        } else {
          this.router.navigate(['/error-page']);
          return EMPTY;
        }
      })
    );
  }
}
