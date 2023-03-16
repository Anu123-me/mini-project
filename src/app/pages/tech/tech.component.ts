import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';
import { SingleService } from 'src/app/single.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  single:any
  constructor(private dis:SingleService,private fs:FireService,private r:Router){}
  ngOnInit(){

    this.single = this.dis.getFrtData()
    console.log(this.single);
    
}
buy(id:any){
  localStorage.setItem('buyId',id)
  this.r.navigate(['/buy'])
}
}
