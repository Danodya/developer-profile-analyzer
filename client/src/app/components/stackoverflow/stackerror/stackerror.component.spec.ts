import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackerrorComponent } from './stackerror.component';

describe('StackerrorComponent', () => {
  let component: StackerrorComponent;
  let fixture: ComponentFixture<StackerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
