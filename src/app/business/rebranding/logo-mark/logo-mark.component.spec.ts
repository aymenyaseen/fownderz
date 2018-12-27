import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMarkComponent } from './logo-mark.component';

describe('LogoMarkComponent', () => {
  let component: LogoMarkComponent;
  let fixture: ComponentFixture<LogoMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
