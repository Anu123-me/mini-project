import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';
import { Router } from '@angular/router';
import { Single4Component } from '../single4/single4.component';

@Component({
  selector: 'app-orga',
  templateUrl: './orga.component.html',
  styleUrls: ['./orga.component.css']
})
export class OrgaComponent {
  database:any
  constructor(private single:SingleService,private r:Router){
    this. database=single.getorgadata()
    //console.log (field)
  }
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.r.navigate(['/single4'])
  }

}
