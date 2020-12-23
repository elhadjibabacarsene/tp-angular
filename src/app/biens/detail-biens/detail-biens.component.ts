import { Component, OnInit } from '@angular/core';
import {UtilitiesService} from '../../helpers/utilities.service';
import {ActivatedRoute} from '@angular/router';
import {BiensService} from '../service-biens/biens.service';
import {Bien} from '../bien.interface';

@Component({
  selector: 'app-detail-biens',
  templateUrl: './detail-biens.component.html',
  styleUrls: ['./detail-biens.component.css']
})
export class DetailBiensComponent implements OnInit {
  private id: number;
  bien: Bien;

  constructor(private route: ActivatedRoute, private bienService: BiensService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.bien = this.bienService.getBienById(this.id);
    /*this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.bien = this.bienService.getBienById(this.id);
    });*/
  }
}
