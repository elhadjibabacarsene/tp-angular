import {Injectable} from '@angular/core';
import {User} from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {id: 1, nom: 'Niang', prenom: 'Djiby', email: 'padjiby@gmail.com', password: 'passer', role: 'ADMIN'},
    {id: 1, nom: 'Mbaye', prenom: 'Mamadou', email: 'mbayemamadou@gmail.com', password: 'passer', role: 'CLIENT'}
  ];

  constructor() {
  }

  findUserById(id: number): User {
    const user = this.users.find(
      (u: User) => {
        return u.id === id;
      }
    );
    return user;
  }

  getUserByEmailPassword(email: string, password: string): User | null {
    const user = this.users.find(
      (u: User) => {
        return u.email === email && u.password === password;
      }
    );
    return user;
  }
}
