import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BiensService} from '../service-biens/biens.service';
import {Bien} from '../bien.interface';

@Component({
  selector: 'app-detail-biens',
  templateUrl: './detail-biens.component.html',
  styleUrls: ['./detail-biens.component.css']
})
export class DetailBiensComponent implements OnInit {
  bien: Bien;
  private id: number;

  constructor(private route: ActivatedRoute, private bienService: BiensService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.bien = this.bienService.getBienById(this.id);
    });
  }
}
