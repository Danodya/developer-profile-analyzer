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

  @Input() repos: any[];
  @Input() githubUser: User;
  @Input() username;
  protected chartLabels: any[];
  protected chartDataArray: any[];
  protected chartData: any[];
  protected chartColors: any[] = [
    {
      backgroundColor:["#0277bd", "#689f38",
      "#6a1b9a", "#ffeb3b", "#d84315", "#5d4037", "#263238"]
    }];

  protected chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Repositories per language'
    },
    legend: {
      labels: {
        fontColor: 'black'
      }
    }
  };

  constructor(protected chartService: ChartService,
              protected githubService: GithubService) {
    this.chartLabels = ['','',''];
    this.chartDataArray = [];
    this.chartData = [{data: [0,0,0], labels: ''}];
  }

  ngOnInit() {}

  public _get() {
    this.githubService.callRepo(this.username).subscribe((repos) => {
      this.chartLabels = this.chartService.getLabelsData(repos);
      this.chartDataArray = this.chartService.getRepoCounts(repos, this.chartLabels);
      this.chartData[0] = {
        data: this.chartDataArray,
        labels: this.chartLabels,
        colors: ['red', 'green', 'blue', 'purple']
      };
    });
  }

  public onChartClick(event) {
    console.log(event);
  }



}
