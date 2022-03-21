import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResComponent } from './insert-res.component';

describe('InsertResComponent', () => {
  let component: InsertResComponent;
  let fixture: ComponentFixture<InsertResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
