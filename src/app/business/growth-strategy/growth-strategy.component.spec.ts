import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthStrategyComponent } from './growth-strategy.component';

describe('GrowthStrategyComponent', () => {
  let component: GrowthStrategyComponent;
  let fixture: ComponentFixture<GrowthStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
