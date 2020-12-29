import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `
})
export class EventThumbnailComponent {
    // declare an object called event that is unrestricted in what type of data it points to.
    // the @Input() decorator indicates that this object will be defined by data coming in from another component.
    // the @Input() decorator is useful for a child component to get it's data.
    @Input() event:any


    // the @Output decorator is something that the child component can use to communicate back to the parent component via events.
    @Output() eventClick = new EventEmitter();


}