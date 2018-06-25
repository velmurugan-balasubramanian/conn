import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { University} from '../models/university';
import { Observable, pipe,of, observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetAllUniversityService {
   //items:Observable<University[]>

  universityCollection: AngularFirestoreCollection<University>;
  universityDoc: AngularFirestoreCollection<University>;
  unversity:Observable<University>;
  universities : Observable<University>;
  
  constructor(private afs:AngularFirestore) {
    // this.universityCollection = this.afs.collection('allUniversityList');
    // this.items = this.afs.collection('allUniversityList').snapshotChanges().map(changes => {
    //   return changes.pipe(map(a =>{
    //     const data = a.payload.doc.data() as University;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
   }

  getlist(){
    console.log("WTTTFFFFF");
    this.universityDoc  = this.afs.collection(`allUniversityList`);
    // this.universities = this.universityDoc.valueChanges();
    const data = this.universityDoc.valueChanges()
    return data;
    // let fuck = this.universityDoc.valueChanges().subscribe( uni => {
    //     this.items = uni;
    //     return this.items;
    // })
    
  }
}
