import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutofocusModule } from "angular-autofocus-fix";
import { ChartsModule } from 'ng2-charts';
import { GithubService } from './services/gihubservice.service';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ChartComponent } from './components/chart/chart.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes = [
  {
    path: '',
    component: GithubComponent
  },
  {
    path: 'stackoverflow',
    component: StackoverflowComponent
  },
  {
    path: 'twitter',
    component: TwitterComponent
  },
  {
    path: 'about',
    component: AboutComponent
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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AutofocusModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
