import { Solicitacao } from './../../models/Solicitacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/Usuario';
import { InformationServiceProvider } from '../../providers/information-service/information-service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
    selector: 'page-pendente',
    templateUrl: 'pendente.html',
})
export class PendentePage 
{
    private _usuarioLogado: Usuario;
    public listaSolicitacoes: AngularFireList<any>;

    constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams, 
        private _informationService: InformationServiceProvider,
        private _db: AngularFireDatabase
    )
    {
        this._usuarioLogado = this._informationService.usuario;

        console.log(this._usuarioLogado);
    }

    ionViewDidLoad()
    {
        this.listaSolicitacoes = this._db.list('/chat');

        console.log(this.listaSolicitacoes);

        // this._db.list('/chat').push({
        //     usuario: {
        //         nome: this._usuarioLogado.nome,
        //         tipo: this._usuarioLogado.tipo
        //     }
        // });
    }

    criarSolicitacao()
    {
    }
}
