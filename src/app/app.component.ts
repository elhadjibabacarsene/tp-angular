import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-angular';
  nom = 'Anonymous';
  ok = false;
  message = 'Activer';
  search = '';

  onClickButton() {
    this.message = this.ok ? 'Activer' : 'Désactiver';
    this.ok = !this.ok;
  }

  getValue(data: string) {
    this.search = data;
  }
}
