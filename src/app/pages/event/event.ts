import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventServ } from '../../service/event';
import { Observable } from 'rxjs';
import { IEvent } from '../../models/model';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [AsyncPipe, NgIf],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  activatedRoute = inject(ActivatedRoute)
  eventService = inject(EventServ)
  eventData$: Observable<IEvent> = new Observable<IEvent>

  constructor() {
    this.activatedRoute.params.subscribe((res : any)=>{
      debugger
      console.log(res)
      this.eventData$ = this.eventService.getEventById(Number.parseInt(res.id));
    })
  }

}
