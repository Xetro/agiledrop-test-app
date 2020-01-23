import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

export interface Company {
  nid: string;
  description: string;
  logo: string;
  title: string;
}

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  imgUrlpath = environment.serverUrl;
  companies$: Observable<Company>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.companies$ = this.route.data.pipe(
      map((response) => response.data)
    );
  }
}
