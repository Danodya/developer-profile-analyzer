import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutofocusModule } from "angular-autofocus-fix";
import { ChartsModule } from 'ng2-charts';
import { GithubService } from './services/github/gihubservice.service';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ChartComponent } from './components/github/chart/chart.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { AboutComponent } from './components/github/about/about.component';
import { HowtoComponent } from './components/github/howto/howto.component';
import {MaterializeModule} from "angular2-materialize";
import { CommitsComponent } from './components/github/commits/commits.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ContributionschartComponent } from './components/github/contributionschart/contributionschart.component';
import {Customreuse} from "./strategies/customreuse";
import {StarsService} from "./services/github/stars.service";
import { StarcountComponent } from './components/github/starcount/starcount.component';
import { ForksComponent } from './components/github/forks/forks.component';
import { FooterComponent } from './components/footer/footer.component';
import { WatchersComponent } from './components/github/watchers/watchers.component';
import { IssuesComponent } from './components/github/issues/issues.component';
import { OrganizationsComponent } from './components/github/organizations/organizations.component';
import { DashboardComponent } from './components/stackoverflow/dashboard/dashboard.component';
import { ErrorComponent } from './components/github/error/error.component';
import { TagsComponent } from './components/stackoverflow/tags/tags.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import { MentionsComponent } from './components/stackoverflow/mentions/mentions.component';
import {AgWordCloudModule} from "angular4-word-cloud";
import { WordcloudComponent } from './components/stackoverflow/wordcloud/wordcloud.component';
import { ToptagsComponent } from './components/stackoverflow/toptags/toptags.component';
import {CapitalizeFirstPipe} from "./pipes/capitalize.pipe";
import { ReputationComponent } from './components/stackoverflow/reputation/reputation.component';

const appRoutes = [
  {
    path: '',
    component: GithubComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'stackoverflow',
    component: StackoverflowComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'twitter',
    component: TwitterComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'commits',
    component: CommitsComponent,
    data: {shouldDetach: true}
  }
];

@NgModule({
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
    FormsModule,
    ChartsModule,
    AutofocusModule,
    MaterializeModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgWordCloudModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [GithubService, {provide: RouteReuseStrategy, useClass: Customreuse}],
  bootstrap: [AppComponent]
})
export class AppModule { }
