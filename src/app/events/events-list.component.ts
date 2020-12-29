import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <!-- 
            the "eventClick" is the name of the event to listen for from the child component. 
            "$event" is data emitted from event 
            you can only emit a single value with an event emitter, so if you need to send multiple things, wrap them in a obj
        -->
        <!-- <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail> -->

        <!-- #thumbnail is a template variable let lets you access public methods & field names -->
        <!-- <event-thumbnail #thumbnail [event]="event1"></event-thumbnail> -->

        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventListComponent {
    // you can go and define some data here if you want like this: 
    // but, we're just going to get our data from an API.

    event1 = {
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