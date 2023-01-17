import { Component, OnInit } from '@angular/core';
import { ViviendasService } from '../../services/viviendas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ViviendasService]
})
export class HomePage implements OnInit {
  public portadas!: any[];
  public otrasZonas!: any [];
  public numByZonas!: any [];
  constructor(private _viviendasService: ViviendasService) { }

  ngOnInit(): void {
    this._viviendasService.getHome().subscribe(
      {
        next: response => {
          //const mapped = Object.keys(response).map(key => ({type: key, value: response[key]}));
          //this.portadas = response;
          this.portadas = Object.values(response);
          var localidadesOtrasZonas= [];
          var numLocalidadesOtrasZonas= [];
          localidadesOtrasZonas.push(Object.values(this.portadas[5]));
          numLocalidadesOtrasZonas.push(Object.values(this.portadas[6]));
          this.otrasZonas= localidadesOtrasZonas[0];
          this.numByZonas=numLocalidadesOtrasZonas;
          console.log(this.portadas);
          console.log(this.otrasZonas);
          console.log(this.numByZonas);

        },
        error: err => {
          console.log(err.error.msg);

        }
      }
    );

  }

}
