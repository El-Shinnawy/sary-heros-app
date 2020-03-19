import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoCardComponent } from './hero-info-card.component';

describe('HeroInfoCardComponent', () => {
  let component: HeroInfoCardComponent;
  let fixture: ComponentFixture<HeroInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
