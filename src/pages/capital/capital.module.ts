import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapitalPage } from './capital';

@NgModule({
  declarations: [
    CapitalPage,
  ],
  imports: [
    IonicPageModule.forChild(CapitalPage),
  ],
})
export class CapitalPageModule {}
