import { ChatPage } from './../chat/chat';
import { Solicitacao } from './../../models/Solicitacao';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InformationServiceProvider } from '../../providers/information-service/information-service';
import { Usuario } from '../../models/Usuario';
import { SolicitacaoInterface } from '../../models/SolicitacaoInterface';
import firebase from 'firebase';

@IonicPage()
@Component({
    selector: 'page-solicitacoes',
    templateUrl: 'solicitacoes.html',
})
export class SolicitacoesPage 
{
    private _usuarioLogado: Usuario;
    public solicitacoes = [];

    // public items: Array<any> = [];
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
                if (item.val().professor.nome == this._usuarioLogado.nome)
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

        // this._db.list('/solicitacoes', q => q.orderByChild('professor/nome').equalTo(this._usuarioLogado.nome)).valueChanges()
        //     .subscribe(data => { 
        //         this.solicitacoes = [];

        //         console.log('data');
        //         console.log(data);

        //         for (let i = 0; i < data.length; i++)
        //         {
        //             this.solicitacoes.push(data[i]);
        //         }

        //         console.log(this.solicitacoes);

        //         loading.dismiss();
        //     });
    }

    criarSolicitacao()
    {
        let loading = this._loadingCtrl.create({
            content: 'Criando...'
        });
        loading.present();

        let solicitacao = new Solicitacao(this._usuarioLogado);
        this._db.list('/solicitacoes').push(solicitacao)
            .then((solicitacaoCriada) => {
                let data = new Date();
                let chat = {
                    solicitacaoKey: solicitacaoCriada.key,
                    mensagens: [''],
                    dataCriacao: data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes()
                };

                this._db.list('/chats').push(chat)
                    .then(() => { loading.dismiss(); });
            });
    }

    verDetalhesSolicitacao(solicitacaoId)
    {
        this.navCtrl.push(ChatPage.name, { solicitacaoKey: solicitacaoId });
    }
}