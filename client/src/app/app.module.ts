import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms";
import { GithubService } from "./gihubservice.service";
import {RouterModule} from "@angular/router";
import { SearchComponent } from './search/search.component';

const appRoutes = [
  {
    path: 'fetch',
    component: GithubComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
