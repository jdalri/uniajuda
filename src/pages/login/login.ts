import { Sala } from './../../models/Sala';
import { Usuario } from './../../models/Usuario';
import { InformationServiceProvider } from './../../providers/information-service/information-service';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
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
    public cpf: string = '33333333333';
    public senha: string = '123123';
    public isenabled: boolean = false;

    constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams, 
        private _alertCtrl: AlertController, 
        private _login: LoginServiceProvider,
        private _information: InformationServiceProvider
    ) 
    {
    }

    efetuarLogin()
    {
        let usuarioLogado = null;
        let sala = null;

        if (this.cpf == '11111111111' && this.senha == '123123')
        {
            sala = new Sala('A-101', 'Bloco A');
            usuarioLogado = new Usuario('Rodrigo', this.cpf, this.senha, 'Professor', sala);

            this._information.setUsuario(usuarioLogado);
            this.navCtrl.setRoot(TabsPage);
        }
        else if (this.cpf == '22222222222' && this.senha == '123123')
        {
            sala = new Sala('C-203', 'Bloco C')
            usuarioLogado = new Usuario('José', this.cpf, this.senha, 'Professor', sala);

            this._information.setUsuario(usuarioLogado);
            this.navCtrl.setRoot(TabsPage);
        }
        else if (this.cpf == '33333333333' && this.senha == '123123')
        {
            sala = new Sala('C-203', 'Bloco C')
            usuarioLogado = new Usuario('Alberto', this.cpf, this.senha, 'Professor', sala);

            this._information.setUsuario(usuarioLogado);
            this.navCtrl.setRoot(TabsPage);
        }
        else if (this.cpf == '44444444444' && this.senha == '123123')
        {
            sala = new Sala('C-203', 'Bloco C')
            usuarioLogado = new Usuario('Pedro', this.cpf, this.senha, 'Professor', sala);

            this._information.setUsuario(usuarioLogado);
            this.navCtrl.setRoot(TabsPage);
        }        
        else if (this.cpf == '55555555555' && this.senha == '123123')
        {
            sala = new Sala('', '');
            usuarioLogado = new Usuario('Deise', this.cpf, this.senha, 'Amarelinho', sala);

            this._information.setUsuario(usuarioLogado);
            this.navCtrl.setRoot(TabsPage);
        }
        else if (this.cpf == '66666666666' && this.senha == '123123')
        {
            sala = new Sala('', '');
            usuarioLogado = new Usuario('Lorena', this.cpf, this.senha, 'Amarelinho', sala);

            this._information.setUsuario(usuarioLogado);
            this.navCtrl.setRoot(TabsPage);
        }
        else
        {
            this._alertCtrl.create({
                title: 'Erro',
                subTitle: 'Usuário não encontrado',
                buttons: [ 'OK' ]
            }).present();
        }
    }

    // efetuarLogin()
    // {
    //     this._login.fazerLogin(this.cpf, this.senha)
    //         .then(res => {

    //             console.log(res);


    //             // let usuarioLogado = new Usuario(res.nome, res.cpf, res.senha, res.tipo);





    //             // this._information.setUsuario(res);

    //             this.navCtrl.setRoot(TabsPage);
    //         })
    //         .catch(err => {
    //             this._alertCtrl.create({
    //                 title: 'Erro',
    //                 subTitle: 'Usuário não encontrado',
    //                 buttons: [ 'OK' ]
    //             }).present();
    //         });

    //     // else
    //     //     this.navCtrl.setRoot(TabsPage);
    // }
}