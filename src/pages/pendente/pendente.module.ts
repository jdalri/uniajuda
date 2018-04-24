import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendentePage } from './pendente';

@NgModule({
    declarations: [
        PendentePage,
    ],
    imports: [
        IonicPageModule.forChild(PendentePage),
    ],
    exports: [
        PendentePage
    ]
})
export class PendentePageModule {}
