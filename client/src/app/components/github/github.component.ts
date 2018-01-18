import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GithubService } from '../../services/gihubservice.service';
import {User} from '../models/user';
import {ChartService} from "../../services/chart.service";


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

  // Need to send this repos array to the child component to chart component.

  constructor(protected gitHubService: GithubService) {
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
    this.gitHubService.callRepo(this.username).subscribe((repo) => {
      this.repos = repo;
      console.log(this.repos);
    });
  }


}
