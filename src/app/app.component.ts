import * as Rx from 'rxjs';
import { Component } from '@angular/core';


export AppComponent{

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
}