import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IboFormComponent } from './ibo-form.component';

describe('IboFormComponent', () => {
  let component: IboFormComponent;
  let fixture: ComponentFixture<IboFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IboFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IboFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
