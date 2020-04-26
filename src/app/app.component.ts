import { Component } from '@angular/core';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar-test';
  dataArray: EventData[] = [
    {
      id: 1,
      title: 'aaa',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
}
