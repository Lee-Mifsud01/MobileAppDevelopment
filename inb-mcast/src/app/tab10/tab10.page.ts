import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab10',
  templateUrl: 'tab10.page.html',
  styleUrls: ['tab10.page.scss'],
  standalone: false,
})
export class Tab10Page {

  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

}