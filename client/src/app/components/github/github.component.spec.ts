import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import {GithubService} from "../../services/github/gihubservice.service";
import {ChartService} from "../../services/github/chart.service";
import {ErrorComponent} from "./error/error.component";
import {FormsModule} from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";
import {ContributionschartComponent} from "./contributionschart/contributionschart.component";
import {ChartComponent} from "./chart/chart.component";
import {CommitsComponent} from "./commits/commits.component";
import {StarcountComponent} from "./starcount/starcount.component";
import {ForksComponent} from "./forks/forks.component";
import {WatchersComponent} from "./watchers/watchers.component";
import {IssuesComponent} from "./issues/issues.component";
import {OrganizationsComponent} from "./organizations/organizations.component";
import {HowtoComponent} from "./howto/howto.component";
import {ChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubComponent,
        ErrorComponent,
        ContributionschartComponent,
        ChartComponent,
        CommitsComponent,
        StarcountComponent,
        ForksComponent,
        WatchersComponent,
        IssuesComponent,
        OrganizationsComponent,
        HowtoComponent
      ],
      providers: [GithubService, ChartService],
      imports: [FormsModule, MaterializeModule, ChartsModule, HttpClientModule, Ng4LoadingSpinnerModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
