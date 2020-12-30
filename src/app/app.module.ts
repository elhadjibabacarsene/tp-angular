import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BiensComponent} from './biens/biens.component';
import {AddBiensComponent} from './biens/add-biens/add-biens.component';
import {DetailBiensComponent} from './biens/detail-biens/detail-biens.component';
import {ListBiensComponent} from './biens/list-biens/list-biens.component';
import {ItemBiensComponent} from './biens/list-biens/item-biens/item-biens.component';
import {JumbotronBienComponent} from './biens/jumbotron-bien/jumbotron-bien.component';
import {HighlightDirective} from './highlight.directive';
import {SeparatorPipe} from './helpers/pipes/separator.pipe';
import {TimeLeftPipe} from './helpers/pipes/time-left.pipe';
import {SummarizePipe} from './helpers/pipes/summarize.pipe';
import {FilterPipe} from './helpers/pipes/filter.pipe';
import {ReservationBiensComponent} from './biens/reservation-biens/reservation-biens.component';
import {DetailsReservationComponent} from './biens/reservation-biens/details-reservation/details-reservation.component';
import {EditReservationComponent} from './biens/reservation-biens/edit-reservation/edit-reservation.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorsComponent } from './errors/errors.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBiensComponent,
    DetailBiensComponent,
    ListBiensComponent,
    ItemBiensComponent,
    JumbotronBienComponent,
    HighlightDirective,
    SeparatorPipe,
    TimeLeftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBiensComponent,
    DetailsReservationComponent,
    EditReservationComponent,
    PageNotFoundComponent,
    ErrorsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
