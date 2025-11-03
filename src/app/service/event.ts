import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIResponse, IEvent, OrganizerEvent } from '../models/model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventServ {

  apiUrl: String = "https://freeapi.miniprojectideas.com/api/EventBooking/";

  constructor(private http : HttpClient){ }

  
  
  getAllEvents(){
    return this.http.get<IAPIResponse>('/api/EventBooking/GetAllEvents')
  }

  getEventById(id: number){
    return this.http.get<IEvent>(`/api/EventBooking/GetEventById?id=${id}`).pipe(
      map((item:any)=>{
        return item.data;
      })
    )
  }

  getEventsByOrganizer(){
    const id: number = 5
    return this.http.get<OrganizerEvent>(`/api/EventBooking/GetEventsByOrganizer?organizerId=${id}`).pipe(
      map((item:any)=>{
        return item.data;
      })
    )

  }
}
