import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformRefreshComponent } from './platform-refresh.component';

describe('PlatformRefreshComponent', () => {
  let component: PlatformRefreshComponent;
  let fixture: ComponentFixture<PlatformRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
