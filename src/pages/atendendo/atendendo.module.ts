import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtendendoPage } from './atendendo';

@NgModule({
    declarations: [
        AtendendoPage,
    ],
    imports: [
        IonicPageModule.forChild(AtendendoPage),
    ],
    exports: [
        AtendendoPage
    ]
})
export class AtendendoPageModule {}
