import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab6Page } from './tab6.page';

// Start of the test
describe('Tab6Page', () => {
  let component: Tab6Page;
  let fixture: ComponentFixture<Tab6Page>;

  // Create the testing module and component
  beforeEach(() => {
    fixture = TestBed.createComponent(Tab6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // A simple test to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
