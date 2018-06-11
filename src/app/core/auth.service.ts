import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, pipe,of, observable} from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
//import { switchMap } from 'rxjs/operators';


interface University  {
   uid?:string;

}
// interface User {
//   uid: string;
//   email?: string | null;
//   photoURL?: string;
//   displayName?: string;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  universityCollection: AngularFirestoreCollection<any>;

  universities : Observable<University>;

  constructor(private afAuth:AngularFireAuth,
    private afs:AngularFirestore) {
      //this.universityCollection  = this.afs.collection('universities');
      //this.universities = this.universityCollection.valueChanges();
        pipe(switchMap(university => {
          if (university) {
            console.log( "will this fucking work ",this.afs.doc<University>('universities/${university.uid}').valueChanges()  );          
          }else{
            return null;
          }
        }))
  }

  //// Email/Password Auth ////
  // emailSignUp(email: string, password: string) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then(user => {
  //         alert("signup success");
  //       return this.setUserDoc(user) // create initial user document
  //     })
  //     .catch(error => this.handleError(error) );
  // }

  // updateUser(university: User, data: any) { 
  //   return this.afs.doc(`universities/${university.uid}`).update(data)
  // }

  // private handleError(error) {
  //   console.error(error)
  //   //this.notify.update(error.message, 'error')
  // }

   // Sets user data to firestore after succesful login
  //  private setUserDoc(user) {

  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`universities/${user.uid}`);

  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email || null,
  //     // uid: string;
  //     // universityName?:string;
  //     // universityEmail?:string;
  //     // establishedYear?:Date;
  //     // city?:string;
  //     // state?:string;
  //     // country?:string;
  //   }

  //   return userRef.set(data)

  // }

  // emailLogin(email: string, password: string) {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //   .then(credential => {
  //     this.universityCollection  = this.afs.collection('universities');
  //     this.universities = this.universityCollection.valueChanges();
  //     console.log("WTF", this.universities);
  //     alert("working");
  //     //alert("Login Succcessful");
  //     //console.log( "will this fucking work ",this.afs.doc<University>('universities/${credential.user.uid}').valueChanges()  );
  //     //this.notify.update('Welcome to Firestarter!!!', 'success');
  //     //this.updateUserData(credential.user); // if using firestore
  //     //return this.allUniversityData(credential.user,data);
  //   })
    // .then(credential =>{
  
    //   // alert("Login");
    //   // alert(credential.user.uid);
    //   // //console.log ("Here is the university document",this.afs.doc(`universities/${credential.user.uid}`).valueChanges);
    //   // var docRef = this.afs.collection("universities").doc(credential.user.uid);
    //   // console.log("here goes another set",docRef);
      
    // })
  //   .catch(error => this.handleError(error) );


  //  }

emailSignUp(email: string, password: string, data:any) {
  console.log("inside Email Signup");
  console.log("data from university reg form", data);
  return this.afAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then(credential => {
      alert("SIgnup Succcessful");
      //this.notify.update('Welcome to Firestarter!!!', 'success');
      this.updateUserData(credential.user); // if using firestore
      return this.allUniversityData(credential.user,data);
    })
    .catch(error => this.handleError(error));
}

private handleError(error: Error) {
  console.error(error);
  //this.notify.update(error.message, 'error');
}

private updateUserData(user: University) {
  const userRef: AngularFirestoreDocument<University> = this.afs.doc(
    `universities/${user.uid}`
  );

  const data: University = {
    uid: user.uid
    //universityEmail: user.email
  };
  console.log("Here Goees the data", data);
  return userRef.set(data);
  
}

allUniversityData(user, model:any ){
  // const userRef: AngularFirestoreDocument<University> = this.afs.doc(
  //   `universities/${user.uid}`
    
  // );
  console.log("Data before written",model);
  return this.afs.doc(`universities/${user.uid}`).update(model)


}
  // updateUser(user: User, data: any) { 
  //   return this.afs.doc(`users/${user.uid}`).update(data)
  // }

}
