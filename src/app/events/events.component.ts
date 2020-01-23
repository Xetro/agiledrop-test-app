import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../environments/environment';

export interface CompanyEvent {
  nid: string;
  title: string;
  organizer: string;
  event_logo: string;
  event_description: string;
  event_date: Date;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  imgUrlpath = environment.serverUrl;

  @Input()
  events: CompanyEvent[];

  constructor() { }

  ngOnInit() {}


}
