import { TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { FunctionsService } from './functions.service';

describe('FunctionsService', () => {
  let service: FunctionsService;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeAll(() => {
    // Freeze “today” at 2025-06-10 for predictable date math
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2025-06-10T00:00:00Z'));
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  });

  beforeEach(() => {
    // 1) Create a NavController spy
    navCtrlSpy = jasmine.createSpyObj('NavController', ['back']);

    // 2) Configure TestBed with our spy
    TestBed.configureTestingModule({
      providers: [
        FunctionsService,
        { provide: NavController, useValue: navCtrlSpy }
      ]
    });

    // 3) Stub localStorage methods
    spyOn(localStorage, 'getItem').and.callFake((key: string) => key === 'dark-mode' ? 'false' : null);
    spyOn(localStorage, 'setItem');

    // 4) Stub document.body.classList methods
    spyOn(document.body.classList, 'add');
    spyOn(document.body.classList, 'remove');

    service = TestBed.inject(FunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateDaysLeft()', () => {
    it('calculates days left until targetDate', () => {
      service.targetDate = new Date('2025-05-28');
      service.calculateDaysLeft();
      // From June 10 back to May 28 is -13 days
      expect(service.daysLeft).toBe(-13);
    });
  });

  describe('calculateNextStipendDaysLeft()', () => {
    beforeEach(() => {
      service.stipendDates = [
        new Date('2025-05-01'),
        new Date('2025-06-15'),
        new Date('2025-07-01'),
      ];
    });

    it('finds the next future stipend date', () => {
      service.calculateNextStipendDaysLeft();
      expect(service.nextStipendDate).toEqual(new Date('2025-06-15'));
      expect(service.nextStipendDaysLeft).toBe(5);
    });

    it('handles no future dates gracefully', () => {
      service.stipendDates = [ new Date('2025-01-01') ];
      service.calculateNextStipendDaysLeft();
      expect(service.nextStipendDate).toBeNull();
      expect(service.nextStipendDaysLeft).toBe(0);
    });
  });

  describe('dark mode loading & toggling', () => {
    it('loadDarkMode initializes correctly when localStorage is false', () => {
      service.loadDarkMode();
      expect(service.isDarkMode).toBeFalse();
      expect(document.body.classList.remove).toHaveBeenCalledWith('dark');
      expect(service.logoUrl).toBe('assets/images/Logo2.png');
    });

    it('toggleDarkMode flips mode and persists to localStorage', () => {
      // start false → toggle to true
      service.isDarkMode = false;
      service.toggleDarkMode();

      expect(service.isDarkMode).toBeTrue();
      expect(document.body.classList.add).toHaveBeenCalledWith('dark');
      expect(localStorage.setItem).toHaveBeenCalledWith('dark-mode', 'true');
      expect(service.logoUrl).toContain('logoDarkMode.png');

      // toggle back to false
      service.toggleDarkMode();
      expect(service.isDarkMode).toBeFalse();
      expect(document.body.classList.remove).toHaveBeenCalledWith('dark');
      expect(localStorage.setItem).toHaveBeenCalledWith('dark-mode', 'false');
      expect(service.logoUrl).toContain('Logo2.png');
    });
  });

  describe('back()', () => {
    it('delegates to NavController.back()', () => {
      service.back();
      expect(navCtrlSpy.back).toHaveBeenCalled();
    });
  });
});
