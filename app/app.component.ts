import { Component } from '@angular/core';
import {AddCustomMessageComponent} from './add.custom.message.component'
import {EditViewCustomMessageComponent} from './edit.view.custom.message'
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  
  <nav>
  <a data-toggle="modal" data-target="#myModal" [hidden]="flag">Add Custom Message</a>
  <a data-toggle="modal" data-target="#editViewModal" [hidden]="!flag">Edit/View Custom Message</a>
  </nav>
  <span [hidden]="!editFlag">{{editViewMessage}}</span>
<add-message (childChanged)="addMessage=$event" (addFlag)="flag=$event"></add-message>
<edit-view-message [passedValue]="addMessage" (editViewChanged)="editViewMessage=$event" (editViewFlag)="editFlag=$event"></edit-view-message>

  `,
  directives:[AddCustomMessageComponent, ROUTER_DIRECTIVES,EditViewCustomMessageComponent]
})

export class AppComponent { 
  addMessage:string;
  flag:boolean;
  editViewMessage:string;
  editFlag:boolean;
}
