import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: false,
})
export class Tab5Page {

  classList = [
    { name: 'Class A', value: 'class-schedule1' },
    { name: 'Class B', value: 'class-schedule2' },
    { name: 'Class C', value: 'class-schedule3' },
  ];

  selectedClass = 'class-schedule1';
  currentTimetableImage = '/assets/images/class-schedule1.png';

  //This function allows the buttons to switch between different images
  onClassChange(event: any){
    this.currentTimetableImage = `assets/images/${this.selectedClass}.png`;
  }

  //Download the currently selected image function
  downloadImage(){
    const link = document.createElement('a');
    link.href = this.currentTimetableImage;
    link.download = `${this.selectedClass}_timetable.png`;
    link.click();
  }


  constructor() {}
}