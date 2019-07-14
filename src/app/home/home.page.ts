import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  municipio: string;
  texto: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
      this.texto = this.data.getTextoByKey(this.municipio);
    });
  }

  onChangeMunicipio() {
    this.texto = this.data.getTextoByKey(this.municipio);
    this.data.changeMunicipio(this.municipio);
  }

}
