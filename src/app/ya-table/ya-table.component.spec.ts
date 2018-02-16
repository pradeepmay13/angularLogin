import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaTableComponent } from './ya-table.component';

describe('YaTableComponent', () => {
  let component: YaTableComponent;
  let fixture: ComponentFixture<YaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
