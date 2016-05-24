import { Component } from '@angular/core';
import {AddCustomMessageComponent} from './add.custom.message.component'
import {EditViewCustomMessageComponent} from './edit.view.custom.message'
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  
  <nav>
  <a data-toggle="modal" data-target="#myModal">Add Custom Message</a>
  <a data-toggle="modal" data-target="#editViewModal">Edit/View Custom Message</a>
  </nav>
  {{addMessage}}
<add-message (childChanged)="addMessage=$event"></add-message>
<edit-view-message [passedValue]="addMessage"></edit-view-message>

  `,
  directives:[AddCustomMessageComponent, ROUTER_DIRECTIVES,EditViewCustomMessageComponent]
})

export class AppComponent { 
  addMessage:string;
}
