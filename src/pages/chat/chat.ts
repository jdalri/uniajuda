import { FinalizadoPage } from './../finalizado/finalizado';
import { AngularFireDatabase } from 'angularfire2/database';
import { InformationServiceProvider } from './../../providers/information-service/information-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage 
{
    solicitacaoKey: string;
    message: string = '';
    usuario;
    chat;
    messages: object[] = [];

    constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams, 
        private _informationService: InformationServiceProvider, 
        private _db: AngularFireDatabase,
        private _loadingCtrl: LoadingController
    )
    {
        this.solicitacaoKey = this.navParams.get('solicitacaoKey');
        this.usuario = this._informationService.usuario;

        console.log('usuario');
        console.log(this.usuario);

        firebase.database().ref('/chats').on('value', snap => {
            this.chat = {};

            snap.forEach(item => {
                if (item.val().solicitacaoKey == this.solicitacaoKey)
                {
                    this.chat = {
                        key: item.key,
                        dataCriacao: item.val().dataCriacao,
                        solicitacaoKey: item.val().solicitacaoKey,
                        mensagens: item.val().mensagens
                    };

                    this.messages = this.chat.mensagens;
                }
                
                return false;
            });
        });
    }

    enviarMensagem()
    {
        let data = new Date();

        this.chat.mensagens.push({ 
            dataEnvio: data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes(),
            usuario: this.usuario,
            mensagem: this.message
        });

        firebase.database().ref('chats/' + this.chat.key).update({ 'mensagens': this.chat.mensagens })
            .then((data) => {
                console.log('atualizou');
                console.log(data);
            });

        this.message = '';
    }

    finalizarSolicitacao()
    {
        firebase.database().ref('solicitacoes/' + this.solicitacaoKey).update({ 'status': 'Finalizado' })
            .then((data) => {
                console.log('atualizou');
                console.log(data);
                
                this.navCtrl.setRoot(FinalizadoPage.name);
            });
    }
}