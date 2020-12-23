import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../bien.interface';
import {BiensService} from '../service-biens/biens.service';

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
  @Input() searchInput = '';

  constructor(private bienService: BiensService) {
  }

  ngOnInit(): void {
    this.biens = this.bienService.getAllBiens();
  }

}
