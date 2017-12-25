import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SuccessAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success-add',
  templateUrl: 'success-add.html',
})
export class SuccessAddPage {

  name: string;
  location: string;
  star: string;
  price: string;
  type: string;
  review: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.navCtrl =navCtrl;
    this.name = window.localStorage.getItem('name');
    this.location = window.localStorage.getItem('location');
    this.star = window.localStorage.getItem('star');
    this.price = window.localStorage.getItem('price');
    this.type = window.localStorage.getItem('type');
    this.review = window.localStorage.getItem('review');

    this.price = this.getPriceToString(this.price);
    this.star = this.getStarToString(this.star);

    console.log("DANS SUCCESSADD - NOM DU RESTO : ****************",name);
   // window.localStorage.setItem('file', value.file);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessAddPage');
  }

  getPriceToString(priceInt : string): string{
    switch(priceInt){
        case("3"):
        return "Cher";
        case("2"):
        return "Moyen";
        case("1"):
        return "Pas cher";

    }
    return "Erreur prix";
  }
  getStarToString(starInt : string): string{
    switch(starInt){
        
        case("5"):
        return "Excellent !";
        case("4"):
        return "Bon !";
        case("3"):
        return "Pas mal !";
        case("2"):
        return "Peut mieux faire !";
        case("1"):
        return "Nul !";

    }
    return "Erreur star (rating)";
  }

  backToHome(){

   // this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();  
   this.navCtrl.push(HomePage);
  }

}
