import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-uni-registration',
  templateUrl: './uni-registration.component.html',
  styleUrls: ['./uni-registration.component.scss']
})
export class UniRegistrationComponent implements OnInit {

  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.auth.emailSignUp(this.model.email, this.model.password);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
