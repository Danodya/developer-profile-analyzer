import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcountComponent } from './starcount.component';

describe('StarcountComponent', () => {
  let component: StarcountComponent;
  let fixture: ComponentFixture<StarcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
