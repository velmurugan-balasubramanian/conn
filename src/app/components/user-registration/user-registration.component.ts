import { Component, OnInit } from '@angular/core';
import { GetAllUniversityService } from '../../services/get-all-university.service'
import { University } from '../../models/university';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  public tempArray;
  items:University[];
  model: any = {};
  constructor(private getAllUniversity : GetAllUniversityService, private auth: AuthService ) { }

  ngOnInit() {
    this.getAllUniversity.getlist().subscribe( item => {
      this.items=item;
      console.log("booyeahh",this.items);
       this.tempArray = Object.keys(this.items);
    })
    
  }
  onSubmit() {
    console.log("onSubmit Funtion Called",this.model);
    this.auth.userEmailSignUp(this.model.userEmailR, this.model.userPasswordR,this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    //this.auth.allUniversityData(this.model)
    
  }

}
