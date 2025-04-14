import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss'],
  standalone: false,
})
export class Tab8Page {

  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }

}