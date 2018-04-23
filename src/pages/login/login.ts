import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage 
{
    public cpf: string = '';
    public senha: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private _alertCtrl: AlertController) 
    {
    }

    efetuarLogin()
    {
        if (this.cpf == '' || this.senha == '')
        {
            this._alertCtrl.create({
                title: 'Erro',
                subTitle: 'Informe o CPF e a senha',
                buttons: [
                    'OK'
                ]
            }).present();

            return;
        }
        else
            this.navCtrl.setRoot(TabsPage);
    }
}