import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ColorPage} from '../color/color';
import {LeaderPage} from '../leader/leader';
import {CapitalPage} from '../capital/capital';
import {YearPage} from '../year/year';
import {PartiesPage} from '../parties/parties';
/**
 * Generated class for the ChoosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose',
  templateUrl: 'choose.html',
})
export class ChoosePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePage');
  }
  Start(){
    this.navCtrl.push(HomePage)

  }
  Start1(){
    this.navCtrl.push(ColorPage)

  }
  Start2(){
    this.navCtrl.push(LeaderPage)

  }
  Start3(){
    this.navCtrl.push(CapitalPage)

  }
  Start4(){
    this.navCtrl.push(YearPage)

  }
  Start5(){
    this.navCtrl.push(PartiesPage)

  }



}
