import { Injectable } from '@angular/core';
import { database,database1, database3, database4 } from 'src/assets/fieldin';
@Injectable({
  providedIn: 'root'
})
export class SingleService {

  constructor() { }
    
  getData(){
    return database
  }

  getAnimalData(){
    return database1
  }
  
  getaquadata(){
    return database3
  }
  getorgadata(){
    return database4
  }
  }

