import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import { Servicio } from '../api/model/Servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  municipio: string;
  servicios: Servicio[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
      this.data.getServicios(municipio).subscribe(servicios => {
        this.servicios = servicios;
      });
    });
  }

}
