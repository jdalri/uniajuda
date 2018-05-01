import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Usuario } from '../../models/Usuario';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { InformationServiceProvider } from '../../providers/information-service/information-service';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
    selector: 'page-atendendo',
    templateUrl: 'atendendo.html',
})
export class AtendendoPage 
{
    private _usuarioLogado: Usuario;
    public listaSolicitacoes: AngularFireList<any>;
    public solicitacoes = [];
    public referencia: firebase.database.Reference = firebase.database().ref('/solicitacoes');
    
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

        this.referencia.on('value', snap => {
            this.solicitacoes = [];

            snap.forEach(item => {
                if (item.val().status == 'Atendendo' && item.val().nomeAmarelinho.nome == this._usuarioLogado.nome)
                {
                    let solicitacao = {
                        key: item.key,
                        dataCriacao: item.val().dataCriacao,
                        nomeAmarelinho: item.val().nomeAmarelinho,
                        professor: item.val().professor,
                        status: item.val().status
                    };
    
                    this.solicitacoes.push(solicitacao);
                }
                
                return false;
            });

            loading.dismiss();
        });
    }

    verDetalhesSolicitacao(solicitacaoKey)
    {
        this.navCtrl.push(ChatPage.name, { solicitacaoKey: solicitacaoKey });
    }
}