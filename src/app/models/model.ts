export interface IAPIResponse{
    message: string;
    result: boolean;
    data: any;
}

export interface IEvent {
    eventId: number;
    eventName: string;
    startDate: string;
    startTime: string;
    endDate: string;
    organizerName: string;
    userId: number;
    price: number;
    location: string;
    imageUrl: string;
  }

  export interface OrganizerEvent{
    eventId: number;
    eventName: string;
    imageUrl: string;
    location: string;
    price: number;
    startDate: string; // ISO date string (e.g. "2024-10-02T00:00:00")
    endDate: string;   // same as above
    startTime: string; // e.g. "23:15"
  }
  