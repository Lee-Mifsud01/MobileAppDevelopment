import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss'],
  standalone: false,
})
export class Tab7Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}