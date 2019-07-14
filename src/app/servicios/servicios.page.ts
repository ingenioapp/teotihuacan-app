import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  municipio: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
    });
  }

}
