import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss'],
  standalone: false,
})
export class Tab11Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}