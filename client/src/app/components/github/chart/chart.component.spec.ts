import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import {ChartsModule} from "ng2-charts";
import {ChartService} from "../../../services/github/chart.service";
import {GithubService} from "../../../services/github/gihubservice.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      imports: [ChartsModule],
      providers: [ChartService, GithubService, Ng4LoadingSpinnerService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
