import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeMainpageComponent } from './employe-mainpage.component';

describe('EmployeMainpageComponent', () => {
  let component: EmployeMainpageComponent;
  let fixture: ComponentFixture<EmployeMainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeMainpageComponent]
    });
    fixture = TestBed.createComponent(EmployeMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
