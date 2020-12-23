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
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
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
    component: DetailBiensComponent
  }
];

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
