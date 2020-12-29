import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent {
    // you can go and define some data here if you want like this: 
    // but, we're just going to get our data from an API.
    event = {
        id: 1,
        name: "Angular Connect",
        date: "9/26/2036",
        time: '10:00 am',
        price: 599.99,
        imagUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}