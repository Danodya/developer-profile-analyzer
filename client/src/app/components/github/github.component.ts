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
import {ErrorComponent} from "./error/error.component";

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
  protected validated: boolean;

  @ViewChild(ChartComponent) chartComponent: ChartComponent;
  @ViewChild(CommitsComponent) commitComponent: CommitsComponent;
  @ViewChild(ContributionschartComponent) contributions: ContributionschartComponent;
  @ViewChild(StarcountComponent) starsComponent: StarcountComponent;
  @ViewChild(ForksComponent) forksComponent: ForksComponent;
  @ViewChild(WatchersComponent) watchersComponent: WatchersComponent;
  @ViewChild(IssuesComponent) issuesComponent: IssuesComponent;
  @ViewChild(OrganizationsComponent) organizationsComponent: OrganizationsComponent;
  @ViewChild(ErrorComponent) error: ErrorComponent;

  // Need to send this repos array to the child component to chart component.
  constructor(protected gitHubService: GithubService,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.githubUser = new User();
    this.username = 'dilantha95';
    this.URL = "http://ghchart.rshah.org/409ba5/" + this.username;
    this.display_commits = false;
    this.validated = true;
    this.get();
    this.test();
  }

  ngOnInit() {
  }

  get() {
    // Usual user data.
    this.gitHubService.call(this.username).subscribe((user) => {
      this.githubUser = user;
      this.validated = user.validated;
      // console.log(user.validated);
    });
  }

  test() {
    // This timeout is there because test() should run after get() runs. If not, the `validated` boolean value would
    // not update. I can use promises for this as well. Check out the proper way. However, giving timeouts, works.
    setTimeout(() => {
      // Test
      this.prog = false;
      if (this.validated) {
        console.log("INSIDE");
        console.log(this.validated);
        setTimeout(() => {
          this.gitHubService.callRepo(this.username).subscribe((repo) => {
            this.repos = repo;
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
      } else {
        this.error.openModal();
      }
    }, 2000);

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
