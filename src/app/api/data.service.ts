import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gobernante } from '../api/model/Gobernante';
import { Servicio } from '../api/model/Servicio';
import { Turismo } from './model/Turismo';
import { Cultura } from './model/Cultura';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public municipios = new Map([
    ['otumba', 'Otumba'],
    ['sanjuan', 'San Juan Teotihuacan'],
    ['sanmartin', 'San Martín de las Pirámides']
  ]);

  public texto = new Map([
    ['otumba', 'Otumba (del náhuatl Otompan, "lugar de otomíes"). Su definición tradicional y aceptada es que por este lugar pasó Hernán Cortés y libró una gran batalla en donde perdió muchos soldados y dijo para sí: ¡Oh, tumba de mis soldados!, fue por esta razón se bautizó así a este municipio.'],
    ['sanjuan', 'Teotihuacán es un nombre derivado de los vocablos nahuatl teo, que quiere decir ‘dios’ o ‘divino’; y huahcān, que quiere decir ‘lugar donde abundan’, por lo que Teotihuacán significa ‘lugar donde están los dioses.'],
    ['sanmartin', 'El municipio está ubicado dentro del Valle de Teotihuacán, donde se encuentran las majestuosas pirámides del Sol y de la Luna. Después de la conquista, en 1580 el nombre registrado de la entidad era “San Martín Teacal”; “San Martín Obispo”, en 1594; en 1697, como “San Martín Teyacac”; 1849, “San Martín de Neteotiloyan” y, finalmente, en 1905, comienza a llamarse “San Martín de las Pirámides”']
  ]);

  private municipio = new BehaviorSubject('otumba');
  currentMunicipio = this.municipio.asObservable();

  private gobernantesBehavior = new BehaviorSubject(null);
  gobernantes = this.gobernantesBehavior.asObservable();

  constructor(private http: HttpClient) {}

  public getGobernantes(municipio: string) {
      return this.http.get<Gobernante[]>('assets/' + municipio + '.json');
  }

  public getServicios(municipio: string) {
    return this.http.get<Servicio[]>('assets/' + municipio + '-servicios.json');
  }

  public getTurismo(municipio: string) {
    return this.http.get<Turismo[]>('assets/' + municipio + '-turismo.json');
  }

  public getCultura(municipio: string) {
    return this.http.get<Cultura[]>('assets/' + municipio + '-cultura.json');
  }

  public getTextoByKey(key: string) {
    return this.texto.get(key);
  }

  public getMunicipioByKey(key: string) {
    return this.municipios.get(key);
  }

  changeMunicipio(municipioKey: string) {
    this.municipio.next(municipioKey);
  }

}
