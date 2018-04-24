import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-pendente',
    templateUrl: 'pendente.html',
})
export class PendentePage 
{
    constructor(public navCtrl: NavController, public navParams: NavParams) 
    {
    }

    click()
    {
        alert('clicou');
    }
}
