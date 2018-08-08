import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import{ChoosePage} from '../choose/choose';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the PartiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parties',
  templateUrl: 'parties.html',
})
export class PartiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartiesPage');
  }


    @ViewChild(Slides) slides: Slides;
  
    goToSlide(){
      this.slides.slideTo(1,1000);
    }
    goToSlide2(){
      this.slides.slideTo(2,1000);
    }
    goToSlide3(){
      this.slides.slideTo(3,1000);
    }
    goToSlide4(){
      this.slides.slideTo(4,1000);
    }
    goToSlide5(){
      this.slides.slideTo(5,1000);
    }


  Question1;
  Question2;
  Question3;
  Question4;
  Question5;
 
 count1=0;
 count2=0;
 count3=0;
 count4=0;
 count5=0;
 total=0;
  // function () {
    Start5(){
   console.log(this.Question1)
   if(this.Question1=="13"){
     this.count1=this.count1 +20;
     console.log(this.count1);
   }
   else{
    this.count1=0;
    console.log(this.count1);
 
   }
 
   console.log(this.Question2)
   if(this.Question2=="ANC"){
     this.count2=this.count2 +20;
     console.log(this.count2);
   }
   else{
    this.count1=0;
    console.log(this.count2);
 
   }
   console.log(this.Question3)
   if(this.Question3=="EFF"){
     this.count3=this.count3 +20;
     console.log(this.count3);
   }
   else{
    this.count1=0;
    console.log(this.count3);
 
   }
   console.log(this.Question4)
   if(this.Question4=="DA"){
     this.count4=this.count4 +20;
     console.log(this.count4);
   }
   else{
    this.count4=0;
    console.log(this.count4);
 
   }
 
   console.log(this.Question5)
   if(this.Question5=="EFF"){
     this.count5=this.count5 +20;
     console.log(this.count5);
   }
   else{
    this.count5=0;
    console.log(this.count5);
 
   }  
 
       this.total=this.total + this.count1 + this.count2 + this.count3 + this.count4 + this.count5;
        console.log(this.total);
      //  if(this.total==5){
 
           if(this.total==100){
 
            const alert = this.alertCtrl.create({
              title: 'congratulation!',
              subTitle: this.total+'%,You know all your Colors!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(ChoosePage)
          }
 
           else{
 
            const alert = this.alertCtrl.create({
              title: 'Sorry!',
              subTitle: this.total+'% Please learn more, try again!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(PartiesPage)
          }







        }










}
