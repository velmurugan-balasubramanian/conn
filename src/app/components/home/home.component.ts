import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { Observable, pipe,of, observable} from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {University} from '../../models/university';
import {User} from '../../models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allUserData;
  items:User[];
  universityDoc: AngularFirestoreCollection<User>;
  unversity:Observable<User>;
  universities : Observable<User>;
  constructor(private auth: AuthService,private afAuth:AngularFireAuth, private afs:AngularFirestore, private router:Router) {}

  ngOnInit() {
    console.log("WTTTFFFFF");
    let state= this.afAuth.user;
    state.subscribe(res => {
      if(res){
      console.log("Fuck yeshhh",res.uid);
      this.universityDoc  = this.afs.collection(`universities/${res.uid}/students`);
     // this.universities = this.universityDoc.valueChanges();
     let some = this.universityDoc.valueChanges().subscribe( uni => {
            this.items = uni;
           console.log("This Items",this.items);
       this.allUserData = Object.keys(this.items);
        console.log("lolololol",Object.keys(this.items))
        //  console.log("fucking awesome buddy", this.items);
        //  return fuck;
      }
     );
       
     console.log("hahahah",Object.keys(some));
     console.log("will this work",some);
    }
     });
  }
}
