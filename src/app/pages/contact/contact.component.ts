import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name:string=''
ename1:string=''
message:string=''

constructor(private fire:FireService){}
contact(){
  let info={
    name:this.name,
    email:this.ename1,
    message:this.message
  }
  this.fire.contact(info)
  this.name=''
  this.ename1=''
  this.message=''
}
}
