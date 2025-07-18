import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss'],
  standalone: false,
})
export class Tab11Page {

  searchTerm: string = '';

  internships = [
    {
      title: 'Software Developer',
      image: 'assets/images/internship1.png',
      description: 'Required to know: JavaScript, Python, SQL, HTML, CSS',
      link: 'https://mita.gov.mt'
    },
    {
      title: 'Banking Associate',
      image: 'assets/images/bovLogo.jpeg',
      description: 'Required to know: Communication skills, Accounting, Economics, Finance',
      link: 'https://www.bov.com/careers'
    },
    {
      title: 'Journalist',
      image: 'assets/images/tvm_logo.jpg',
      description: 'Required to know: English, Interviewing skills, Multimedia skills',
      link: 'https://tvmnews.mt/en/jobs/'
    }
  ];

  filteredInternships = [...this.internships];

  constructor(private navCtrl: NavController) {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredInternships = this.internships.filter(internship =>
      internship.title.toLowerCase().includes(term) ||
      internship.description.toLowerCase().includes(term)
    );
  }
}