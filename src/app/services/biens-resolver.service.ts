import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Bien} from '../biens/bien.interface';
import {BiensService} from '../biens/service-biens/biens.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiensResolverService implements Resolve<Bien> {

  constructor(private bienService: BiensService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien {
    return this.bienService.getBienById(+route.params.id);
  }
}
