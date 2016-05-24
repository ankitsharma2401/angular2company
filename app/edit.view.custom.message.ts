import {Component} from '@angular/core'
import {OnInit} from '@angular/core'
import {Validators,ControlGroup,FormBuilder} from '@angular/common'

@Component({
    selector:'edit-view-message',
templateUrl:'app/edit.view.custom.message.html',
    
    styleUrls:['./css/add.css'],
   inputs:['parentValue:passedValue']
})
export class EditViewCustomMessageComponent implements OnInit{
     myForm:ControlGroup;
     parentValue:string;
    constructor(private formBuilder:FormBuilder){} 
    ngOnInit():any{
        this.myForm=this.formBuilder.group({
            comment:['',Validators.required]
        });
    }
}