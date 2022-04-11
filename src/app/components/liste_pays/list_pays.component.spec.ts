import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liste_paysComponent } from './liste_pays.component';

describe('CountriesComponent', () => {
  let component: Liste_paysComponent;
  let fixture: ComponentFixture<Liste_paysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Liste_paysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Liste_paysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
