import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventListComponent } from 'src/app/events/events-list.component'
import { EventThumbnailComponent } from 'src/app/events/event-thumbnail.component'

import { EventsAppComponent } from './events-app.component';

// as you create services, pipes, components, or directives, you will need to add them into modules to be able to use them.
@NgModule({

  
  // this is where you add other modules
  // BrowserModule is something that has all the core angular services and directives that almost all angular apps will use.
  imports: [
    BrowserModule
  ],


  // this is where you add components, pipes, and directives
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],

  // this is where you add services.
  // providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
