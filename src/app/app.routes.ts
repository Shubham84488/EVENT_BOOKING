import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Event } from './pages/event/event';
import { MyBooking } from './pages/my-booking/my-booking';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component : Home
    },
    {
        path: 'event/:id',
        component: Event
    },
    {
        path: 'my-bookings',
        component: MyBooking
    }
];
