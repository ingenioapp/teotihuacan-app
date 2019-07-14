import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.page.html',
  styleUrls: ['./cultura.page.scss'],
})
export class CulturaPage implements OnInit {

  municipio: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMunicipio.subscribe(municipio => {
      this.municipio = municipio;
    });
  }

}
