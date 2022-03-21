import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployAllDataComponent } from './employ-all-data.component';

describe('EmployAllDataComponent', () => {
  let component: EmployAllDataComponent;
  let fixture: ComponentFixture<EmployAllDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployAllDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
