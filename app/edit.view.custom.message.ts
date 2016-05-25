import {Component,EventEmitter} from '@angular/core'
import {OnInit} from '@angular/core'
import {Validators,ControlGroup,FormBuilder} from '@angular/common'
import {Output} from '@angular/core'

@Component({
    selector:'edit-view-message',
templateUrl:'app/edit.view.custom.message.html',
    
    styleUrls:['./css/add.css'],
   inputs:['parentValue:passedValue']
})
export class EditViewCustomMessageComponent implements OnInit{
     myForm:ControlGroup;
     parentValue:string;
     flag:boolean;
    constructor(private formBuilder:FormBuilder){} 
    ngOnInit():any{
        this.myForm=this.formBuilder.group({
            comment:['',Validators.required]
        });
    }
    @Output() editViewFlag=new EventEmitter<boolean>();
     editViewClicked(event) {
         this.flag=true;
          this.editViewFlag.emit(this.flag);
  }
    
    @Output() editViewChanged=new EventEmitter<string>();
    onChangeEditView(value:string){
        this.editViewChanged.emit(value);
    }
    
}