import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViviendasService } from '../../services/viviendas.service';



@Component({
  selector: 'app-tipoviviendas',
  templateUrl: './tipoviviendas.page.html',
  styleUrls: ['./tipoviviendas.page.scss'],

  providers: [ViviendasService]
})
export class TipoviviendasPage implements OnInit {
  public tipoviviendas!: any[];
  public tipoVivienda!: string;
  public price!: any[];
  public refresh!: number;
  constructor(private _tipoviviendaservice: ViviendasService, private _route: ActivatedRoute, private _router: Router) { }
  ionViewWillEnter() {
    this.refresh = Math.floor(Math.random() * 10000);
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let tipo = params['tipo'];

      this.tipoVivienda=tipo.replace("-", " ");
      if(this.tipoVivienda=="verdestacados"){
        this.tipoVivienda="destacados"
      }
      if(this.tipoVivienda=="aticos"){
        this.tipoVivienda="áticos"
      }
 
      this.tipoVivienda= this.tipoVivienda.charAt(0).toUpperCase() +  this.tipoVivienda.slice(1)
      this._tipoviviendaservice.getTipoVivienda(tipo).subscribe(
        {
          next: response => {
            if (response) {
              //const mapped = Object.keys(response).map(key => ({type: key, value: response[key]}));
              //this.portadas = response;
              //this.tipoviviendas = response;
              this.tipoviviendas = response;
              console.log(this.tipoviviendas);
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
