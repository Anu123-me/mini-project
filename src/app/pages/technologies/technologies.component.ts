import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  single:any
  constructor(private sin:SingleService){}

  ngOnInit(){
    let id = localStorage.getItem('buyId')
    let data= this.sin.getFrtData()
    this.single = data.filter(d=>d.id===id)
    console.log(this.single);
  }

}
