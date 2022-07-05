import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuProfileEditComponent } from './stu-profile-edit.component';

describe('StuProfileEditComponent', () => {
  let component: StuProfileEditComponent;
  let fixture: ComponentFixture<StuProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
