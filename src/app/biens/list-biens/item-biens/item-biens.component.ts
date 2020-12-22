import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../bien.interface';

@Component({
  selector: 'app-item-biens',
  templateUrl: './item-biens.component.html',
  styleUrls: ['./item-biens.component.css']
})
export class ItemBiensComponent implements OnInit {
  @Input() bien: Bien;

  constructor() { }

  ngOnInit(): void {
  }

}
