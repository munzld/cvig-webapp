import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents().subscribe(events => this.events = events);
  }

}
