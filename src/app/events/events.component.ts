import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../environments/environment'
import * as moment from 'moment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  imgUrlpath = environment.serverUrl;

  @Input()
  events: any[];

  constructor() { }

  ngOnInit() {
  }

}
