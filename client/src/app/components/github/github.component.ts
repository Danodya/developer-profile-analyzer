import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { GithubService } from '../../services/github/gihubservice.service';
import {User} from '../models/user';
import {ChartService} from "../../services/github/chart.service";
import {ChartComponent} from "./chart/chart.component";
import {CommitsComponent} from "./commits/commits.component";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService, ChartService]
})
export class GithubComponent implements OnInit {

  // This is the parent component.

  protected username: string;
  protected githubUser: User;
  protected repos: any[];
  protected prog: boolean;

  @ViewChild(ChartComponent) chartComponent: ChartComponent;
  @ViewChild(CommitsComponent) commitComponent: CommitsComponent;

  // Need to send this repos array to the child component to chart component.

  constructor(protected gitHubService: GithubService,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.githubUser = new User();
    this.username = 'dasunpubudumal';
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

    }, 1000);

    this.prog = true;

  }



}
