import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aqua',
  templateUrl: './aqua.component.html',
  styleUrls: ['./aqua.component.css']
})
export class AquaComponent {
  database:any
  constructor(private single:SingleService,private r:Router){
    this. database=single.getaquadata()
    //console.log (field)
  }
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.r.navigate(['/single3'])
  }


}
