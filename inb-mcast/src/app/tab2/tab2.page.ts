import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private functionService: FunctionsService) {}

  back() {
    this.functionService.back();
  }

}
