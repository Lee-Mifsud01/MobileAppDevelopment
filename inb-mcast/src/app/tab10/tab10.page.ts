import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab10',
  templateUrl: 'tab10.page.html',
  styleUrls: ['tab10.page.scss'],
  standalone: false,
})
export class Tab10Page {

  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }

}