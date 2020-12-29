import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-jumbotron-bien',
  templateUrl: './jumbotron-bien.component.html',
  styleUrls: ['./jumbotron-bien.component.css']
})
export class JumbotronBienComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onLogin(email = 'padjiby@gmail.com', password = 'passer') {
   this.authService.login(email, password);
  }

  onLogout() {
    this.authService.logout();
  }
}
