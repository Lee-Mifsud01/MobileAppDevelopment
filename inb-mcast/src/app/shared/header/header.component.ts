import { Component, OnInit, Input } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent  implements OnInit {


  @Input() title: string = '';

  constructor(private functionService: FunctionsService) {}
  
    back() {
      this.functionService.back();
    }
  ngOnInit() {}

}
