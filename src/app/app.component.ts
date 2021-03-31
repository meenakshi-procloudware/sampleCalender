import { Component, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: any[];

  options: any;

  constructor(private eventService: DummyService) { }

    ngOnInit() {
        this.eventService.getEvents().then(events => {this.events = events;});
        
        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-01',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'year,agendaWeek,month, '
            },
            dateClick: (e) =>  {
                console.log(":: date clicked", e)
            }
        }
    }
}
