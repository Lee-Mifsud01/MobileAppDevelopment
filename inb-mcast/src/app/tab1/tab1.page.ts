import { Component } from '@angular/core';
//
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public footer: FunctionsService) {}

}

