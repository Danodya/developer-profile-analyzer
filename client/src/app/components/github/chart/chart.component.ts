import {Component, Input, OnInit} from '@angular/core';
import {ChartService} from "../../../services/github/chart.service";
import {User} from "../../models/user";
import {GithubService} from "../../../services/github/gihubservice.service";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [Ng4LoadingSpinnerService]
})
export class ChartComponent implements OnInit {

  @Input() repos: any[];
  @Input() githubUser: User;
  @Input() username;
  chartLabels: any[];
  chartDataArray: any[];
  chartData: any[];
  chartColors: any[] = [
    {
      backgroundColor:["#0277bd", "#689f38",
      "#6a1b9a", "#ffeb3b", "#d84315", "#5d4037", "#263238"]
    }];

  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Repositories per language (Top 30)'
    },
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 9
      },
      position: 'left'

    }
  };

  constructor(protected chartService: ChartService,
              protected githubService: GithubService,
              protected spinnerService: Ng4LoadingSpinnerService) {
    this.chartLabels = ['','',''];
    this.chartDataArray = [];
    this.chartData = [{data: [0,0,0], labels: ''}];
  }

  ngOnInit() {}

  public _get() {
    this.githubService.callRepo(this.username).subscribe((repos) => {
      this.spinnerService.show(); // Not working
      this.chartLabels = this.chartService.getLabelsData(repos);
      this.chartDataArray = this.chartService.getRepoCounts(repos, this.chartLabels);
      this.chartLabels[this.chartLabels.indexOf(null)] = "Other";
      this.chartData[0] = {
        data: this.chartDataArray,
        labels: this.chartLabels,
        colors: ['red', 'green', 'blue', 'purple']
      };
      this.spinnerService.hide(); // Not working
    });
  }

  public onChartClick(event) {
    console.log(event);
  }



}
