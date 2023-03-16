import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';

@Component({
  selector: 'app-singlepage2',
  templateUrl: './singlepage2.component.html',
  styleUrls: ['./singlepage2.component.css']
})
export class Singlepage2Component {
  single:any
  constructor(private dis:SingleService){}
  ngOnInit(){
  let idd=  localStorage.getItem('id')
  let disArr =  this.dis.getAnimalData()
  this.single = disArr.filter(e=>e.name===idd)


  
  }

}
