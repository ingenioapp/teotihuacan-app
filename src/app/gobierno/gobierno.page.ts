import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.page.html',
  styleUrls: ['./gobierno.page.scss'],
})
export class GobiernoPage implements OnInit {

  municipio: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
    });

  }

}
