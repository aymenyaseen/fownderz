import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDesignComponent } from './custom-design.component';

describe('CustomDesignComponent', () => {
  let component: CustomDesignComponent;
  let fixture: ComponentFixture<CustomDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
