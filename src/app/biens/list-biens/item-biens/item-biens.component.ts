import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Bien} from '../../bien.interface';
import {UtilitiesService} from '../../../helpers/utilities.service';
import {ActivatedRoute} from '@angular/router';
import {BiensService} from '../../service-biens/biens.service';

@Component({
  selector: 'app-item-biens',
  templateUrl: './item-biens.component.html',
  styleUrls: ['./item-biens.component.css']
})
export class ItemBiensComponent implements OnInit {
  @Input() bien: Bien;

  constructor(private utilitiesService: UtilitiesService) {
  }

  ngOnInit(): void {
  }

}
