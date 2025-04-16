import { Component} from '@angular/core';

@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss'],
  standalone: false,
})
export class Tab12Page {

  map1: string = 'assets/images/map.png';
  map2: string = 'assets/images/map2.png';
  
  currentMap: string = this.map1;

  switchMap(){
    this.currentMap = this.currentMap === this.map1 ? this.map2 : this.map1;
  }

  constructor() {}
}