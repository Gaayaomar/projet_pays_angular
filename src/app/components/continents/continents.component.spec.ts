import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsComponent } from './continents.component';

describe('ContinentsPageComponent', () => {
  let component: ContinentsComponent;
  let fixture: ComponentFixture<ContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
