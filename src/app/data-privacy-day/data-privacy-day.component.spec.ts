import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPrivacyDayComponent } from './data-privacy-day.component';

describe('DataPrivacyDayComponent', () => {
  let component: DataPrivacyDayComponent;
  let fixture: ComponentFixture<DataPrivacyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPrivacyDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPrivacyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
