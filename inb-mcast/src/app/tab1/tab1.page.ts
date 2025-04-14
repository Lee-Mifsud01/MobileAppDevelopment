import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  daysLeft: number = 0;
  targetDate: Date = new Date('2025-05-28'); 

  constructor() {}

  ngOnInit() {
    this.calculateDaysLeft();
  }

  calculateDaysLeft() {
    const today = new Date();
    const diff = this.targetDate.getTime() - today.getTime();
    this.daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  isDarkMode: boolean = false;

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;

  if (this.isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  localStorage.setItem('dark-mode', this.isDarkMode.toString());
}

}
