import {Injectable} from '@angular/core';
import {User} from '../../users/users';
import {UsersService} from '../../users/users.service/users.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  connectedUser: User;

  constructor(private userService: UsersService, private router: Router) {
  }
  isAuthentificated() {
    const promise = new Promise(
      ((resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      })
    );
    return promise;
  }
  login(email: string, password: string): void{
    this.connectedUser = this.userService.getUserByEmailPassword(email, password);
    if (this.connectedUser) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    // console.log(this.loggedIn);
    // this.loggedIn = this.connectedUser ? true : false;
  }
  logout(): void{
    this.loggedIn = false;
    this.connectedUser = null;
    this.router.navigate(['/']);
    // console.log(this.loggedIn);
  }
}
