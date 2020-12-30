import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') myform: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  /*onSubmit(form: NgForm) {
    console.log(form.value);
  }*/
  onSubmit(loginForm: NgForm) {
    console.log(this.myform.valid);
  }
}
