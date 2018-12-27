import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAssetsComponent } from './brand-assets.component';

describe('BrandAssetsComponent', () => {
  let component: BrandAssetsComponent;
  let fixture: ComponentFixture<BrandAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
