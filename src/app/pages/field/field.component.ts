import { Component } from '@angular/core';
import { SingleService } from 'src/app/single.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  database:any
  constructor(private single:SingleService,private r:Router){
    this. database=single.getData()
    //console.log (field)
  }
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.r.navigate(['/single'])
  }

}
