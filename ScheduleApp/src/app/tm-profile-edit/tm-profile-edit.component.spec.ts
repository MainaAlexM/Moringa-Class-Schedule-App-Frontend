import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmProfileEditComponent } from './tm-profile-edit.component';

describe('TmProfileEditComponent', () => {
  let component: TmProfileEditComponent;
  let fixture: ComponentFixture<TmProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
