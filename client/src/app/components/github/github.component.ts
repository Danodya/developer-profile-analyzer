import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { GithubService } from '../../services/github/gihubservice.service';
import {User} from '../models/user';
import {ChartService} from "../../services/github/chart.service";
import {ChartComponent} from "./chart/chart.component";
import {CommitsComponent} from "./commits/commits.component";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ContributionschartComponent} from "./contributionschart/contributionschart.component";
import {StarcountComponent} from "./starcount/starcount.component";
import {ForksComponent} from "./forks/forks.component";
import {WatchersService} from "../../services/github/watchers.service";
import {WatchersComponent} from "./watchers/watchers.component";
import {IssuesComponent} from "./issues/issues.component";
import {MaterializeAction} from "angular2-materialize";
import {OrganizationsComponent} from "./organizations/organizations.component";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService, ChartService]
})
export class GithubComponent implements OnInit {

  // This is the parent component.
  modalActions = new EventEmitter<string|MaterializeAction>();
  protected username: string;
  protected githubUser: User;
  protected repos: any[];
  protected prog: boolean;
  protected URL: string;
  protected display_commits: boolean;

  @ViewChild(ChartComponent) chartComponent: ChartComponent;
  @ViewChild(CommitsComponent) commitComponent: CommitsComponent;
  @ViewChild(ContributionschartComponent) contributions: ContributionschartComponent;
  @ViewChild(StarcountComponent) starsComponent: StarcountComponent;
  @ViewChild(ForksComponent) forksComponent: ForksComponent;
  @ViewChild(WatchersComponent) watchersComponent: WatchersComponent;
  @ViewChild(IssuesComponent) issuesComponent: IssuesComponent;
  @ViewChild(OrganizationsComponent) organizationsComponent: OrganizationsComponent;

  // Need to send this repos array to the child component to chart component.

  constructor(protected gitHubService: GithubService,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.githubUser = new User();
    this.username = 'dilantha95';
    this.URL = "http://ghchart.rshah.org/409ba5/" + this.username;
    this.display_commits = false;
  }

  ngOnInit() {
    this.get();
    this.test();
  }

  get() {
    // Usual user data.
    this.gitHubService.call(this.username).subscribe((user) => {
      this.githubUser = user;
    });
  }

  test() {
    // Test

    this.prog = false;


    setTimeout(() => {
      this.gitHubService.callRepo(this.username).subscribe((repo) => {
        this.repos = repo;
        // console.log(this.repos);
      });
      this.chartComponent._get();
      this.commitComponent._get();
      this.contributions._get();
      this.starsComponent._get();
      this.forksComponent._get();
      this.watchersComponent._get();
      this.issuesComponent._get();
      this.organizationsComponent._get();

    }, 1000);

    this.prog = true;

  }

  toggleBoolean() {
    this.display_commits = !this.display_commits;
  }

  openModal(){
    this.modalActions.emit({action:"modal",params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }


}
