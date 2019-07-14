import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.page.html',
  styleUrls: ['./entretenimiento.page.scss'],
})
export class EntretenimientoPage implements OnInit {

  municipio: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
    });
  }

}
