import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  searchTerm: string = '';
  lecturers: string[] = [
    'Mr. Dominic Tringali',
    'Mr. Nico Conti',
    'Ms. Nadia Haber',
    'Ms. Claire Vella'
  ];
  filtered: string[] = [];

  constructor() {
    this.filtered = this.lecturers;
  }

  filterLecturers() {
    const term = this.searchTerm.toLowerCase();
    this.filtered = this.lecturers.filter(lecturer =>
      lecturer.toLowerCase().includes(term)
    );
  }
}
