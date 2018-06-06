import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, pipe,of, observable} from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
//import { switchMap } from 'rxjs/operators';


interface University  {
   uid: string;
   universityName?:string;
   universityEmail?:string;
   establishedYear?:Date;
   city?:string;
   state?:string;
   country?:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  university : Observable<University>;

  constructor(private afAuth:AngularFireAuth,
    private afs:AngularFirestore) {
      this.university = this.afAuth.authState
        pipe(switchMap(university => {
          if (university) {
            return this.afs.doc<University>('universities/${university.uid}').valueChanges()            
          }else{
            return null;
          }
          
        }))
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
          alert("signup success");
        //return this.setUserDoc(user) // create initial user document
      })
      .catch(error => this.handleError(error) );
  }

  updateUser(university: University, data: any) { 
    return this.afs.doc(`universities/${university.uid}`).update(data)
  }

  private handleError(error) {
    console.error(error)
    //this.notify.update(error.message, 'error')
  }

   // Sets user data to firestore after succesful login
   private setUserDoc(user) {

    const userRef: AngularFirestoreDocument<University> = this.afs.doc(`universities/${user.uid}`);

    const data: University = {
      uid: user.uid,
      universityEmail: user.email || null,
      // uid: string;
      // universityName?:string;
      // universityEmail?:string;
      // establishedYear?:Date;
      // city?:string;
      // state?:string;
      // country?:string;
    }

    return userRef.set(data)

  }

//   emailLogin(email: string, password: string) {
//     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
//       .catch(error => this.handleError(error) );
//   }





}
