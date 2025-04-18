import { Component } from '@angular/core';

@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss'],
  standalone: false,
})
export class Tab11Page {

  constructor() {}
  //This function will allow the users to enter a new link 
  openLink(url: string) {
    window.open(url, '_blank');
  }

}