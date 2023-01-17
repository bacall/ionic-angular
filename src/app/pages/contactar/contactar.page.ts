import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.page.html',
  styleUrls: ['./contactar.page.scss'],
})
export class ContactarPage implements OnInit {
  userMailData = {
    telefono: '',
    nom: '',
    email: '',
    asunto: ''
  }

  constructor(private http: HttpClient, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  sendMail() {

    const link = "http://localhost/annacodeigniter/mail/mail.php?nom=" + this.userMailData.nom + "&email=" + this.userMailData.email + "&telefono=" + this.userMailData.telefono + "&asunto=" + this.userMailData.asunto;
    this.http.get<any>(link).subscribe(async response => {
      console.log(response);
      if (response != "OK") {
       
        let alert = this.alertCtrl.create({
          message: 'No se ha podido enviar el email \r\n intèntelo de nuevo',
          buttons: ['Aceptar']
        });
        (await alert).present();
        
      }else{
        this.userMailData.nom="";
        this.userMailData.email="";
        this.userMailData.telefono="";
        this.userMailData.asunto="";
        let alert = this.alertCtrl.create({
          message: 'Email enviado',
          buttons: ['Aceptar']
        });
        (await alert).present();
        

      }
    });
    console.log(this.userMailData);
  }


}
