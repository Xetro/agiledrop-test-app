import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  imgUrlpath = environment.serverUrl;
  dataSource$: Observable<any>

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource$ = this.route.data.pipe(
      map((response) => response.data)
    );
  }

}
