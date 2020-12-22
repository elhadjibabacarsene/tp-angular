import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBiensComponent } from './biens/add-biens/add-biens.component';
import { DetailBiensComponent } from './biens/detail-biens/detail-biens.component';
import { ListBiensComponent } from './biens/list-biens/list-biens.component';
import { ItemBiensComponent } from './biens/list-biens/item-biens/item-biens.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';

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
    JumbotronBienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
