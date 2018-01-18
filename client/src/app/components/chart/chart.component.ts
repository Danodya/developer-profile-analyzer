import {Component, Input, OnInit} from '@angular/core';
import {ChartService} from "../../services/chart.service";
import {User} from "../models/user";
import {GithubService} from "../../services/gihubservice.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // This is the child component.

  @Input() repos: any[];
  @Input() githubUser: User;
  @Input() username;

   protected chartOptions = {responsive: true};

  constructor(protected chartService: ChartService,
              protected githubService: GithubService) { }

  ngOnInit() {

    // Sandbox area

    // console.log(this.chartService.getLabelsData(this.repos));

    this.githubService.callRepo(this.username).subscribe((repos) => {
      // console.log(repos);
      console.log(this.chartService.getLabelsData(repos));
    });

    // End of sandbox area.

  }





}
