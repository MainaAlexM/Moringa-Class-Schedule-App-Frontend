import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSchComponent } from './session-sch.component';

describe('SessionSchComponent', () => {
  let component: SessionSchComponent;
  let fixture: ComponentFixture<SessionSchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionSchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
