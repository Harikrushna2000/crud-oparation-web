import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployUpdateComponent } from './employ-update.component';

describe('EmployUpdateComponent', () => {
  let component: EmployUpdateComponent;
  let fixture: ComponentFixture<EmployUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
