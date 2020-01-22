import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  dataSource$: Observable<any>

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource$ = this.route.data.pipe(
      tap(res => console.log(res)),
      map((response) => ({company: response.data[0][0], events: response.data[1]}))
    );
  }

}
