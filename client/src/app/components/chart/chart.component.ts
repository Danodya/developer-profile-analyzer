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
  protected chartLabels: any[];
  protected chartDataArray: any[];
  protected chartData: any[];

  protected chartOptions = {responsive: true};

  constructor(protected chartService: ChartService,
              protected githubService: GithubService) {
    this.chartLabels = [];
    this.chartDataArray = [];
    this.chartData = [];
  }

  ngOnInit() {
    this.githubService.callRepo(this.username).subscribe((repos) => {
      this.chartLabels = this.chartService.getLabelsData(repos);
      this.chartDataArray = this.chartService.getRepoCounts(repos, this.chartLabels);
    });
  }

  public _get() {
    this.githubService.callRepo(this.username).subscribe((repos) => {
      console.log(this.chartService.getLabelsData(repos));
      this.chartLabels = this.chartService.getLabelsData(repos);
      console.log(this.chartService.getRepoCounts(repos, this.chartLabels ));
      this.chartDataArray = this.chartService.getRepoCounts(repos, this.chartLabels);

      //This push is wrong. You need to replace data in that array.
      // this.chartData.push({data: this.chartDataArray, labels: this.chartLabels});
      this.chartData[0] = {data: this.chartDataArray, labels: this.chartLabels};
    });
  }

  public onChartClick(event) {
    console.log(event);
  }



}
