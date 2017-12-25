import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


//code behind

@Component({
  //où est défini selector ?
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public counter : number;
  public enable_increment : boolean;
  public button_label : string;



  constructor(public navCtrl: NavController) {
      this.counter = 0;
      this.button_label = "Increment!";
      this.enable_increment = false;
  }



  //async ?
  async increment() : Promise<any>{

    this.enable_increment = !this.enable_increment;

    while(this.enable_increment){
      this.button_label = "Stop!";
      //Thread sleep for 500ms
      await this.sleep(500);
      this.counter++;
    
    }

    this.button_label = "Increment!";


  }

  sleep(ms: number) : Promise<any>{

return new Promise(resolve => setTimeout(resolve,ms));

  }




}
