import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Global } from 'src/app/services/global';


@Injectable()
export class ViviendasService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url= Global.url;                                               7
    }

    pruebas() {
        return "Soy el servicio de artículos !!!";
    }

    getHome(last: any = null): Observable<any> {
        var portada = 'portada';
         
        return this._http.get<any>(this.url + portada);
    }

    getTipoVivienda(tipo: any = null): Observable<any>{
        console.log(this.url + tipo);
        return this._http.get<any>(this.url + tipo);
    }

    getCiudadVivienda(ciudad: any = null): Observable<any>{
        console.log(this.url + "otras_ciudades/" + ciudad);
        return this._http.get<any>(this.url + "otras_ciudades/" + ciudad);
    }

    getIdVivienda(id: any = null): Observable<any>{
        console.log(this.url + "detalles/" + id);
        return this._http.get<any>(this.url  + "detalles/" + id);
    }

    search(searchString: string): Observable<any> {
        return this._http.get<any>(this.url + "search/" + searchString);
    }

    create(article:any):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'save', params, {headers: headers});
    }

    update(id:string, article:any):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'article/' + id, params, {headers: headers});
    }

    delete(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'article/' + id, {headers: headers});
    }

}