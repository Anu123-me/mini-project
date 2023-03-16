import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';


@Component({
  selector: 'app-single3',
  templateUrl: './single3.component.html',
  styleUrls: ['./single3.component.css']
})
export class Single3Component {
  single:any
  constructor(private dis:SingleService){}
  ngOnInit(){
  let idd=  localStorage.getItem('id')
  let disArr =  this.dis.getaquadata()
  this.single = disArr.filter(e=>e.name===idd)
  console.log(this.single);
  
  }

}
