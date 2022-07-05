import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmProfileComponent } from './tm-profile.component';

describe('TmProfileComponent', () => {
  let component: TmProfileComponent;
  let fixture: ComponentFixture<TmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
