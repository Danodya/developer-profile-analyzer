import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationComponent } from './reputation.component';
import {ChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";

describe('ReputationComponent', () => {
  let component: ReputationComponent;
  let fixture: ComponentFixture<ReputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputationComponent ],
      imports: [ChartsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
