import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss'],
  standalone: false,
})
export class Tab11Page {

  // Search input from user
  searchTerm: string = '';

  // Internship data
  internships = [
    {
      title: 'Software Developer',
      image: 'assets/images/internship1.png',
      description: 'Required to know: JavaScript, Python, SQL, HTML, CSS',
      link: 'https://mita.gov.mt',
      category: 'IT'
    },
    {
      title: 'Banking Associate',
      image: 'assets/images/bovLogo.jpeg',
      description: 'Required to know: Communication skills, Accounting, Economics, Finance',
      link: 'https://www.bov.com/careers',
      category: 'Finance'
    },
    {
      title: 'Journalist',
      image: 'assets/images/tvm_logo.jpg',
      description: 'Required to know: English, Interviewing skills, Multimedia skills',
      link: 'https://tvmnews.mt/en/jobs/',
      category: 'Media'
    }
  ];
  

  // Filtered internships for display
  filteredInternships = [...this.internships];
  selectedCategory = 'All';

  // Inject NavController for navigation
  constructor(private navCtrl: NavController) {}

  // Open the internship link in a new tab
  openLink(url: string): void {
    window.open(url, '_blank');
  }

  // Filter internships based on search term
  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredInternships = this.internships.filter(internship =>
      (internship.title.toLowerCase().includes(term) ||
       internship.description.toLowerCase().includes(term)) &&
      (this.selectedCategory === 'All' || internship.category === this.selectedCategory)
    );
  }
  
  
}
