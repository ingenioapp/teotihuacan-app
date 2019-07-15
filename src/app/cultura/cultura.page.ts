import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import { Cultura } from '../api/model/Cultura';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.page.html',
  styleUrls: ['./cultura.page.scss'],
})
export class CulturaPage implements OnInit {

  municipio: string;
  cultura: Cultura[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
      this.data.getCultura(municipio).subscribe(c => {
        this.cultura = c;
      });
    });
  }

}
