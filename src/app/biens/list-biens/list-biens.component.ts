import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../bien.interface';

class BienInterface {
}

@Component({
  selector: 'app-list-biens',
  templateUrl: './list-biens.component.html',
  styleUrls: ['./list-biens.component.css']
})
export class ListBiensComponent implements OnInit {
  // Tableau de bien
  biens: Bien[] = [];

  constructor() {
    for (let i = 1; i <= 6; i++) {
      this.biens.push(
        {
          id: i,
          category: 'Appartement',
          createAt: new Date(),
          description: 'Some quick example text to build on the card title and make up the bulk of the content.',
          image: 'https://source.unsplash.com/1080x720?home&' + i,
          price: 400000,
          sale: false, state: 0,
          title: 'Bien ' + i
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
