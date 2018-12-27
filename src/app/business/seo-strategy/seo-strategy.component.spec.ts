import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoStrategyComponent } from './seo-strategy.component';

describe('SeoStrategyComponent', () => {
  let component: SeoStrategyComponent;
  let fixture: ComponentFixture<SeoStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
