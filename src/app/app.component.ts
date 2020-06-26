import * as Rx from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

var subject = new Subject();

subject.subscribe(
  data => addItem('Observer1:' +data),
  err=> addItem(err),
  ()=> addItem('Observer1 complete.')
)

subject.next('The first thing has been sent.')

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
}