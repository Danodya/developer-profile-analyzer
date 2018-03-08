import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsComponent } from './commits.component';
import {ChartsModule} from "ng2-charts";
import {ChartService} from "../../../services/github/chart.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsComponent ],
      imports: [ChartsModule, HttpClientModule],
      providers: [HttpClient, Ng4LoadingSpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
