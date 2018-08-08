import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ChoosePage} from '../choose/choose';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Choose(){
    this.navCtrl.push(ChoosePage)

  }
}
