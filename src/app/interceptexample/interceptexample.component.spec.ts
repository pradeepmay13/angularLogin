import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptexampleComponent } from './interceptexample.component';

describe('InterceptexampleComponent', () => {
  let component: InterceptexampleComponent;
  let fixture: ComponentFixture<InterceptexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
