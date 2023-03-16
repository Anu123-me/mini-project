import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
  //signupmethod()
  signup(email:string,pass:string){
    createUserWithEmailAndPassword(this.auth,email,pass).then(res=>{
      alert("SignedUp Successfully")
      this.router.navigate(['/'])
    }).catch(err=>{
      alert(err)
    })
  }
  //login method()
  signin(email:string,pass:string){
    signInWithEmailAndPassword(this.auth,email,pass).then(res=>{
      alert("Signin Successfully")
      this.router.navigate(['/home'])
    }).catch(err=>{
      alert(err)
    })
  }
  //contact method()
  contact(data:any){
    const contactcollection= collection(this.fire,'contactdetails')
    addDoc(contactcollection,data).then(res=>{
      alert("Data Added Successfully")

    }).catch(err=>{
      alert(err)
    })
  }

    //contact method()
    buynow(data:any){
      const buycollection= collection(this.fire,'buynowdetails')
      addDoc(buycollection,data).then(res=>{
        alert("Your Response Has Been Recorded")
        this.router.navigate(['/buy'])
      }).catch(err=>{
        alert(err)
      })
    }


}
