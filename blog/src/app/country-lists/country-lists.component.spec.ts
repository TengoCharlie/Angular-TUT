import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListsComponent } from './country-lists.component';

describe('CountryListsComponent', () => {
  let component: CountryListsComponent;
  let fixture: ComponentFixture<CountryListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
