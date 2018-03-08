import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TwitterComponent} from "./components/twitter/twitter.component";
import {SearchComponent} from "./components/search/search.component";
import {MentionsComponent} from "./components/stackoverflow/mentions/mentions.component";
import {CapitalizeFirstPipe} from "./pipes/capitalize.pipe";
import {ChartComponent} from "./components/github/chart/chart.component";
import {GithubComponent} from "./components/github/github.component";
import {IssuesComponent} from "./components/github/issues/issues.component";
import {StackoverflowComponent} from "./components/stackoverflow/stackoverflow.component";
import {WordcloudComponent} from "./components/stackoverflow/wordcloud/wordcloud.component";
import {CommitsComponent} from "./components/github/commits/commits.component";
import {PreloaderComponent} from "./components/preloader/preloader.component";
import {AboutComponent} from "./components/github/about/about.component";
import {TagsComponent} from "./components/stackoverflow/tags/tags.component";
import {OrganizationsComponent} from "./components/github/organizations/organizations.component";
import {ForksComponent} from "./components/github/forks/forks.component";
import {ErrorComponent} from "./components/github/error/error.component";
import {ToptagsComponent} from "./components/stackoverflow/toptags/toptags.component";
import {ReputationComponent} from "./components/stackoverflow/reputation/reputation.component";
import {HowtoComponent} from "./components/github/howto/howto.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ContributionschartComponent} from "./components/github/contributionschart/contributionschart.component";
import {DashboardComponent} from "./components/stackoverflow/dashboard/dashboard.component";
import {StarcountComponent} from "./components/github/starcount/starcount.component";
import {WatchersComponent} from "./components/github/watchers/watchers.component";
import {ChartsModule} from "ng2-charts";
import {AgWordCloudModule} from "angular4-word-cloud";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {RouterModule} from "@angular/router";
import {AutofocusModule} from "angular-autofocus-fix";
import {MaterializeModule} from "angular2-materialize";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {GithubService} from "./services/github/gihubservice.service";
import {ChartService} from "./services/github/chart.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GithubComponent,
        SearchComponent,
        ChartComponent,
        StackoverflowComponent,
        TwitterComponent,
        AboutComponent,
        HowtoComponent,
        CommitsComponent,
        PreloaderComponent,
        ContributionschartComponent,
        StarcountComponent,
        ForksComponent,
        FooterComponent,
        WatchersComponent,
        IssuesComponent,
        OrganizationsComponent,
        DashboardComponent,
        ErrorComponent,
        TagsComponent,
        MentionsComponent,
        WordcloudComponent,
        ToptagsComponent,
        CapitalizeFirstPipe,
        ReputationComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        RouterTestingModule,
        ChartsModule,
        AutofocusModule,
        MaterializeModule,
        Ng4LoadingSpinnerModule,
        RouterModule,
        AgWordCloudModule,
        FormsModule
      ],
      providers: [GithubService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
