import { Component } from '@angular/core';

@Component({
  // this is the html root name.. <app-root></app-root> which will be in the html document where you inject this component
  selector: 'events-app',

  // normally, you would specify an html file that's your template. but you can also hard-code some html
  // templateUrl: './app.component.html',

  // use template if you want to inline your html. (why would you ever do this?)
  template: "<h2>Hello World</h2>",

  // you can specify styles for this component here.
  // styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
