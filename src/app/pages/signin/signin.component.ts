import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
email:string=''
password:string=''
name:string=''
ename:string=''
pname:string=''

constructor(private fire:FireService){}
  ngOnInit(){}

submit(){
  this.fire.signup(this.email,this.password)
  this.name=''
  this.email=''
  this.password=''

}
submit1(){
  this.fire.signin(this.ename,this.pname)
}

}
