import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss'],
  standalone: false,
})
export class Tab12Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}