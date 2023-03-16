import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';
@Component({
  selector: 'app-single4',
  templateUrl: './single4.component.html',
  styleUrls: ['./single4.component.css']
})
export class Single4Component {
  single:any
  constructor(private dis:SingleService){}
  ngOnInit(){
  let idd=  localStorage.getItem('id')
  let disArr =  this.dis.getorgadata()
  this.single = disArr.filter(e=>e.name===idd)
  console.log(this.single);
  
  }

}
