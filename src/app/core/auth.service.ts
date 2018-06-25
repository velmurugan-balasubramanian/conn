import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, pipe, of, observable } from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { University } from '../models/university';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  universityCollection: AngularFirestoreCollection<any>;

  universities: Observable<University>;
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore, private router:Router) { }

// All University Details

  // University Registration
  emailSignUp(email: string, password: string, data: any) {
    console.log("inside Email Signup");
    console.log("data from university reg form", data);
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        alert("SIgnup Succcessful");
        this.updateUniversityData(credential.user); // if using firestore
        this.allUniversityData(credential.user, data);
        this.listUpdateUniversityData(credential.user);
        this.listUniversities(credential.user, data);
        this.router.navigate(['/welcome']);
      })
      .catch(error => this.handleError(error));
  }

  // Create University document 
  private updateUniversityData(user: University) {
    const userRef: AngularFirestoreDocument<University> = this.afs.doc(
      `universities/${user.uid}`
    );
    const data: University = {
      uid: user.uid
    };
    return userRef.set(data);
  }

  // Update University document with registration data
  allUniversityData(user, model: any) {
    console.log("Data before written", model);
    this.afs.doc(`universities/${user.uid}`).update(model);
  }

  //University Data for user Registration
  private listUpdateUniversityData(user: University) {
    const userRef: AngularFirestoreDocument<University> = this.afs.doc(
      `allUniversityList/${user.uid}`
    );
    const data: University = {
      uid: user.uid
    };
    return userRef.set(data);
  }

  listUniversities(user, model: any) {
    this.afs.doc(`allUniversityList/${user.uid}`).update(model);
  }



// User Details

  // User Registration
  userEmailSignUp(email: string, password: string, data: any) {
    console.log("inside User Email Signup", data.universityName);
    console.log("data from university reg form", data);
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.updateUserData(credential.user,data); // if using firestore
        this.allUserData(credential.user, data);
        this.router.navigate(['/welcome']);
      })
      .catch(error => this.handleError(error));
  }

  // Set User Document
  private updateUserData(user: User, model:any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `universities/${model.universityName}/students/${user.uid}`
    );
    const data: User = {
      uid: user.uid
    };
    return userRef.set(data);
  }
  // Update User Document with Registration Data
  allUserData(user, model: any) {
    console.log("Data before written", model);
    this.afs.doc(`universities/${model.universityName}/students/${user.uid}`).update(model);
  }

  
  // Error Handling
  private handleError(error: Error) {
    console.error(error);
    //this.notify.update(error.message, 'error');
  }




  // 



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
  // updateUser(user: User, data: any) { 
  //   return this.afs.doc(`users/${user.uid}`).update(data)
  // }

}
