import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import { Gobernante } from '../api/model/Gobernante';

@Component({
  selector: 'app-gobernante',
  templateUrl: './gobernante.page.html',
  styleUrls: ['./gobernante.page.scss'],
})
export class GobernantePage implements OnInit {

  gobernantes: Gobernante[];
  municipio: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      console.log('Municipio actual: ', municipio);
      this.data.getGobernantes(municipio).subscribe(g => {
        console.log('gobernantes: ', g);
        this.gobernantes = g;
      });
      this.municipio = municipio;
    });

  }

}
