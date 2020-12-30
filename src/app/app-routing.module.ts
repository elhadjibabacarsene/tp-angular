import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBiensComponent} from './biens/list-biens/list-biens.component';
import {AddBiensComponent} from './biens/add-biens/add-biens.component';
import {DetailBiensComponent} from './biens/detail-biens/detail-biens.component';
import {ReservationBiensComponent} from './biens/reservation-biens/reservation-biens.component';
import {DetailsReservationComponent} from './biens/reservation-biens/details-reservation/details-reservation.component';
import {EditReservationComponent} from './biens/reservation-biens/edit-reservation/edit-reservation.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {ErrorsComponent} from './errors/errors.component';
import {BiensResolverService} from './services/biens-resolver.service';
import {LoginComponent} from './auth/login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/biens',
    pathMatch: 'full'
  },
  {
    path: 'biens',
    component: ListBiensComponent
  },
  {
    path: 'biens/add',
    component: AddBiensComponent
  },
  {
    path: 'biens/:id',
    component: DetailBiensComponent, resolve: {bien: BiensResolverService}
  },
  {
    path: 'reservations',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ReservationBiensComponent,
    children: [
      {
        path: ':id',
        component: DetailsReservationComponent
      },
      {
        path: ':id/edit',
        component: EditReservationComponent
      }
    ]
  },
  /*{
    path: 'not-found',
    component: PageNotFoundComponent
  },*/
  {
    path: 'not-found',
    component: ErrorsComponent,
    data: {
      message: 'Page introuvable'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
