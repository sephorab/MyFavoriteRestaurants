import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteDatabaseConfig, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import {FormControl} from "@angular/forms";
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating'; 
import { SuccessAddPage } from '../success-add/success-add';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})


export class AddPage {

  formGroupAdd : FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private formBuilder: FormBuilder, private toast:Toast ) {


    this.navCtrl = navCtrl;
    this.formGroupAdd = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      star: ['5', Validators.required],
      price: ['3', Validators.required],
      type: ['africaine', Validators.required],
      review: ['', Validators.required],
      //file: ['', Validators.required]


    });




  }




  
  addRestaurantForm(value: any): void{
    console.log(this.formGroupAdd.value);


    if(this.formGroupAdd.valid) {

      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        db.executeSql('INSERT INTO restaurants VALUES(NULL,?,?,?,?,?,?)',[value.name,value.location,value.star,value.price, value.type, value.review ])
          .then(res => {
            console.log(res);
            this.toast.show('Data saved', '5000', 'center').subscribe(
              toast => {
                this.navCtrl.popToRoot();
              }
            );
          })
          .catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });
      }).catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
  }


//this.navCtrl.push(SuccessAddPage);

  }



 ngOnInit(){


 }

  

}
