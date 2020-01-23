import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

import { Company } from './companies-list.component';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesListResolverService implements Resolve<Company[]> {

  constructor(private api: ApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company[]> | Observable<never> {
    return this.api.getCompanies().pipe(
      take(1),
      mergeMap(companies => {
        if (companies) {
          return of(companies);
        } else {
          this.router.navigate(['/error-page']);
          return EMPTY;
        }
      })
    );
  }
}
