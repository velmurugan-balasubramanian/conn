import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';



@Component({
  selector: 'app-uni-registration',
  templateUrl: './uni-registration.component.html',
  styleUrls: ['./uni-registration.component.scss']
})

export class UniRegistrationComponent implements OnInit {


  
  model: any = {};
  //password:string;
  
  constructor(private auth: AuthService) { 

  }


  ngOnInit() { }
  onSubmit() {
    console.log("onSubmit Funtion Called");
    this.auth.emailSignUp(this.model.email, this.model.password,this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    //this.auth.allUniversityData(this.model)
    
  }
}
