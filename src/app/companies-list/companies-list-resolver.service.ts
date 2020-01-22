import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesListResolverService implements Resolve<any>{

  constructor(private api: ApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
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
