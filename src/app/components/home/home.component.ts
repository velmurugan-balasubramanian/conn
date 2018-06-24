import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { Observable, pipe,of, observable} from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {University} from '../../models/university';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items:University;
  universityDoc: AngularFirestoreDocument<University>;
  unversity:Observable<University>;
  universities : Observable<University>;
  uniLogin: any = {};
  constructor(private auth: AuthService,private afAuth:AngularFireAuth, private afs:AngularFirestore, private router:Router) {}

  ngOnInit() {
    console.log("WTTTFFFFF");
    let state= this.afAuth.user;
    state.subscribe(res => {
      if(res){
      console.log("Fuck yeshhh",res.uid);
      this.universityDoc  = this.afs.doc(`universities/${res.uid}`);
     // this.universities = this.universityDoc.valueChanges();
     let fuck = this.universityDoc.valueChanges().subscribe( uni => {
         this.items = uni;

         console.log("fucking awesome buddy", this.items);
         return fuck;

      }
     );
    }
    else{
      console.log("NONE");
    }
     });
     
    // pipe(switchMap(university => {
    //   if (university) {
    //     //console.log( "will this fucking work ",this.afs.doc<University>('universities/${university.uid}').valueChanges()  );          
      
    //    // this.universityDoc  = this.afs.doc(`universities/${university.uid}`);
    //     this.universities = this.universityDoc.valueChanges();
    //   }else{
    //     return null;
    //   }
    // }))
  }

}
