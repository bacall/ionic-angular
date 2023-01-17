import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViviendasService } from '../../services/viviendas.service';




DomSanitizer
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  providers: [ViviendasService]
})
export class DetallePage implements OnInit {
[x: string]: any;
  public detallevivienda!: any [];
  public numPhotos!: any;
  public urlWhatsapp!: string;
  public refresh!: number;
 
  constructor(private _detalleservice: ViviendasService, private _route: ActivatedRoute, private _router: Router) { }
  openLink(){
    let baseurl="whatsapp://send?text=Pisos%20Sant%20Cugat%20https://www.pisossantcugat.net/detalle/" + this.urlWhatsapp;
    //this._router.navigate(['/home']);
    console.log(baseurl);
    window.open(baseurl, "_system", 'location=yes');
    return false;
  }
  rfx(_url: any){
    
    
  }
  ionViewWillEnter() {
    this.refresh = Math.floor(Math.random() * 10000);
  }
 
  ngOnInit(): void {
    this._route.params.subscribe(params => {
    let id = params['id'];
   
    this._detalleservice.getIdVivienda(id).subscribe(
      {
        next: response => {
          if (response) {
          //const mapped = Object.keys(response).map(key => ({type: key, value: response[key]}));
          //this.portadas = response;
          //this.tipoviviendas = response;
          this.detallevivienda = response;
          var numFotos = [];
                    for (let i = 0; i < response[0].NumFotos; i++) {
                        let newNum = {
                            id:i.toString(),
                        };
                        numFotos.push(newNum);
                    }
            this.numPhotos=numFotos;
            let zona= response[0].Zona.replace(' - ', '-');
            zona=zona.replace(' ', '-');
            zona=zona.replace(' ', '-');
            zona=zona.toLowerCase();
            this.urlWhatsapp=response[0].Tipus.toLowerCase() + "/" + zona + "/" + response[0].Ref;
          console.log(this.detallevivienda);
          console.log(this.urlWhatsapp);
          console.log(this.refresh);
          }

        },
        error: err => {
          console.log(err.error.msg);

        }
      });
    });
  }



}
