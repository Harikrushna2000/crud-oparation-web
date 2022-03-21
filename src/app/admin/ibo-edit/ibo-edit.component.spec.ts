import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IboEditComponent } from './ibo-edit.component';

describe('IboEditComponent', () => {
  let component: IboEditComponent;
  let fixture: ComponentFixture<IboEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IboEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IboEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
