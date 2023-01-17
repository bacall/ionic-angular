import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViviendasService } from '../../services/viviendas.service';
@Component({
  selector: 'app-otrasciudades',
  templateUrl: './otrasciudades.page.html',
  styleUrls: ['./otrasciudades.page.scss'],
  providers: [ViviendasService]
})
export class OtrasciudadesPage implements OnInit {
  public viviendasOtrasCiudades!: any[];
  constructor(private _viviendaOtrasCiudadesService: ViviendasService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let ciudad = params['ciudad'];
      this._viviendaOtrasCiudadesService.getCiudadVivienda(ciudad).subscribe(
        {
          next: response => {
            if (response) {
              //const mapped = Object.keys(response).map(key => ({type: key, value: response[key]}));
              //this.portadas = response;
              //this.tipoviviendas = response;
              this.viviendasOtrasCiudades = response;
              console.log(this.viviendasOtrasCiudades);
            }
          },
          error: err => {
            console.log(err.error.msg);
          }
        }
      );
    });
  }


}
