import { Solicitacao } from './../../models/Solicitacao';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InformationServiceProvider } from '../../providers/information-service/information-service';
import { Usuario } from '../../models/Usuario';
import { SolicitacaoInterface } from '../../models/SolicitacaoInterface';

@IonicPage()
@Component({
    selector: 'page-solicitacoes',
    templateUrl: 'solicitacoes.html',
})
export class SolicitacoesPage 
{
    private _usuarioLogado: Usuario;
    public solicitacoes = [];

    constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams, 
        private _informationService: InformationServiceProvider, 
        private _db: AngularFireDatabase,
        private _loadingCtrl: LoadingController
    )
    {
        let loading = this._loadingCtrl.create({
            content: 'Buscando dados...'
        });

        loading.present();

        this._usuarioLogado = this._informationService.usuario;

        this._db.list('/solicitacoes', q => q.orderByChild('professor/nome').equalTo(this._usuarioLogado.nome)).valueChanges().subscribe(data => { 
            for (let i = 0; i < data.length; i++)
            {
                this.solicitacoes.push(data[i]);
            }

            loading.dismiss();
         });
    }

    criarSolicitacao()
    {
        let solicitacao = new Solicitacao(this._usuarioLogado);
        this._db.list('/solicitacoes').push(solicitacao);
    }
}