import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import { Turismo } from '../api/model/Turismo';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.page.html',
  styleUrls: ['./entretenimiento.page.scss'],
})
export class EntretenimientoPage implements OnInit {

  municipio: string;
  turismo: Turismo[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
      this.data.getTurismo(municipio).subscribe(t => {
        this.turismo = t;
      });
    });
  }

}
