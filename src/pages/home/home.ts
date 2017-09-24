import { Component } from '@angular/core';
import { NavController ,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,public alerCtrl: AlertController) {

  }

  doAlert(){
    let alert = this.alerCtrl.create({
      title: 'Alerta',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
