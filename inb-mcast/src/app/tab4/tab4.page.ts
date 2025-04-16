import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {

  constructor() {}


  news = [
    {
      title: "Fresher’s week – Gozo Campus (11th October)",
      image: 'assets/images/gozo.jpg'
    },
    {
      title: "Fresher’s week – Institute for the Creative Arts",
      image: 'assets/images/ica.jpg'
    },
    {
      title: "Fresher’s week – (7th, 8th, 9th October)",
      image: 'assets/images/main.jpg'
    }
  ];
  

}
