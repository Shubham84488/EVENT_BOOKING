import { Component, inject } from '@angular/core';
import { EventServ } from '../../service/event';
import { IAPIResponse, IEvent } from '../../models/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  eventList: IEvent[] = [];
  eventService = inject(EventServ)

  ngOnInit(): void{
    this.getEvents()
  }

  getEvents(){
    this.eventService.getAllEvents().subscribe((res: IAPIResponse)=>{
      this.eventList = res.data;
      console.log(this.eventList);
    })
  }
}
