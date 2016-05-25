import {Component,EventEmitter} from '@angular/core'
import {OnInit} from '@angular/core'
import {Validators,ControlGroup,FormBuilder} from '@angular/common'
import {Output} from '@angular/core'

@Component({
    selector:'add-message',
templateUrl:'app/add.custom.message.html',
    
    styleUrls:['./css/add.css']
})



export class AddCustomMessageComponent implements OnInit{
     myForm:ControlGroup;
     flag:boolean=false;
     clearText:string;
     
     
    constructor(private formBuilder:FormBuilder){}
    ngOnInit():any{
        this.myForm=this.formBuilder.group({
            comment:['',Validators.required]
        });
    }
    closeClicked(){
        this.clearText=null;
    }
    @Output() addFlag=new EventEmitter<boolean>();
     addClicked(event) {
         this.flag=true;
          this.addFlag.emit(this.flag);
  }
  
    @Output() childChanged=new EventEmitter<string>();
    onChange(value:string){
        this.childChanged.emit(value);
    }
}
