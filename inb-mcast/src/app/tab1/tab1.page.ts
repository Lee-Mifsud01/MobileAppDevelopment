import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  daysLeft: number = 0;
  targetDate: Date = new Date('2025-05-28'); 

  isDarkMode: boolean = false;
  logoUrl: string = '';

  constructor() {}

  ngOnInit() {
    this.calculateDaysLeft();
    this.loadDarkMode(); // ensure correct mode and logo are set on page load
  }

  calculateDaysLeft() {
    const today = new Date();
    const diff = this.targetDate.getTime() - today.getTime();
    this.daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  loadDarkMode() {
    const darkModeSetting = localStorage.getItem('dark-mode') === 'true';
    this.isDarkMode = darkModeSetting;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
      this.logoUrl = '/assets/images/logoDarkMode.png';
    } else {
      document.body.classList.remove('dark');
      this.logoUrl = '/assets/images/Logo2.png';
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
      this.logoUrl = '/assets/images/logoDarkMode.png';
    } else {
      document.body.classList.remove('dark');
      this.logoUrl = '/assets/images/Logo2.png';
    }

    localStorage.setItem('dark-mode', this.isDarkMode.toString());
  }
}

