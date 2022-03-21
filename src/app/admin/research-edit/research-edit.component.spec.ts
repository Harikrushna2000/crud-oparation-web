import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEditComponent } from './research-edit.component';

describe('ResearchEditComponent', () => {
  let component: ResearchEditComponent;
  let fixture: ComponentFixture<ResearchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
