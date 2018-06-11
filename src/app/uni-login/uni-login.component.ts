import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { Observable, pipe,of, observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';




interface University  {
  

}
@Component({
  selector: 'app-uni-login',
  templateUrl: './uni-login.component.html',
  styleUrls: ['./uni-login.component.scss']
})



export class UniLoginComponent implements OnInit {

  universityCollection: AngularFirestoreCollection<any>;
  universityDoc: AngularFirestoreDocument<any>;
  unversity:Observable<University>;
  universities : Observable<University>;
  uniLogin: any = {};
  constructor(private auth: AuthService,private afAuth:AngularFireAuth, private afs:AngularFirestore) { }

  ngOnInit() { 
    // this.universityCollection  = this.afs.collection('universities');
    //   this.universities = this.universityCollection.valueChanges();
   }
  onSubmitLogin() {
    console.log("Hola!",this.uniLogin);
    console.log("onSubmit Funtion Called");
    //this.auth.emailLogin(this.uniLogin.uniName1, this.uniLogin.uniPassword1);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.uniLogin));
    return this.afAuth.auth.signInWithEmailAndPassword(this.uniLogin.uniName1, this.uniLogin.uniPassword1)
    .then(credential => {
      console.log("this is fucking user Id", credential.user.uid)
      this.universityDoc  = this.afs.doc(`universities/${credential.user.uid}`);
      this.universities = this.universityDoc.valueChanges();
      console.log("Observable",this.universities);
      
      
      //alert("Login Succcessful");
      //console.log( "will this fucking work ",this.afs.doc<University>('universities/${credential.user.uid}').valueChanges()  );
      //this.notify.update('Welcome to Firestarter!!!', 'success');
      //this.updateUserData(credential.user); // if using firestore
      //return this.allUniversityData(credential.user,data);
    })
    
    
    //this.auth.allUniversityData(this.model)
    
  }

}
