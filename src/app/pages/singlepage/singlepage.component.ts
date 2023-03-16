import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  single:any
  database:any
  data:any
  constructor(private dis:SingleService){}
  ngOnInit(){
  let idd=  localStorage.getItem('id')
  let disArr =  this.dis.getData()
  this.single = disArr.filter(e=>e.name===idd)
  
  }


    
  
}
