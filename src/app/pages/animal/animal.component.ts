import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  database:any
  constructor(private single:SingleService,private r:Router){
    this. database=single.getAnimalData()
    //console.log (field)
  }
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.r.navigate(['/single2'])
  }

}
