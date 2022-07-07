import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuProfileComponent } from './stu-profile.component';

describe('StuProfileComponent', () => {
  let component: StuProfileComponent;
  let fixture: ComponentFixture<StuProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
