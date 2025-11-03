import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventServ } from '../../service/event';
import { Observable } from 'rxjs';
import { IEvent, OrganizerEvent } from '../../models/model';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [AsyncPipe, NgIf , DatePipe,NgFor,SlicePipe,RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  activatedRoute = inject(ActivatedRoute)
  eventService = inject(EventServ)
  eventData$: Observable<IEvent> = new Observable<IEvent>
  organizerData$: Observable<OrganizerEvent[]> = new Observable<OrganizerEvent[]>();

  nextYear = new Date().getFullYear() + 1;

  constructor() {
    this.activatedRoute.params.subscribe((res : any)=>{
      this.eventData$ = this.eventService.getEventById(Number.parseInt(res.id));
      this.organizerData$ = this.eventService.getEventsByOrganizer();
      this.organizerData$.subscribe((item)=>{
        console.log(item);
      })
    })
  }

}
