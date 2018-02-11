import {Component, Input, OnInit} from '@angular/core';
import {CommitsService} from "../../../services/github/commits.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";


@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
  providers: [CommitsService]
})
export class CommitsComponent implements OnInit {

  public loaded: boolean;
  chartLabels: any[];
  chartData: any[];
  chart: any[];
  @Input() username;
  chartColors: any[] = [
    {
      backgroundColor:["#f44336", "#b71c1c",
        "#ff8a80", "#f06292", "#e91e63", "#c2185b", "#c2185b", "#ff80ab", "#c51162", "#ba68c8", "#9c27b0",
        "#4a148c", "#d500f9", "#673ab7", "#311b92", "#3f51b5", "#1a237e", "#1a237e", "#0d47a1", "#4dd0e1",
        "#00838f", "#006064", "#00e5ff", "#26a69a", "#004d40", "#1de9b6", "#a5d6a7", "#4caf50", "#1b5e20",
        "#9ccc65", "#9ccc65", "#cddc39", "#827717", "#f9a825", "#ffeb3b", "#e65100", "#e65100", "#f4511e",
        "#a1887f", "#a1887f", "#3e2723", "#bdbdbd"]
    }];
  chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Commits per a Repo (Top 30)'
    },
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 5
      },
      position: 'top'
    }
  };

  constructor(protected commitServive: CommitsService,
              private spinnerService: Ng4LoadingSpinnerService) {

    this.chart = [];
    this.chartLabels = [];
    this.loaded = false;

    // this.spinnerService.show();
    this.commitServive.getCommitDetails(this.username).subscribe((commits) => {
     this.chartLabels = this.commitServive.extractChartLabels(commits);
      // this.spinnerService.hide();
   });


  }

  ngOnInit() {}

  public _get(){
    this.loaded = false;
    this.commitServive.getCommitDetails(this.username).subscribe((commits) => {
      this.chartLabels = this.commitServive.extractChartLabels(commits);
      this.chartData = this.commitServive.extractChartData(commits);
      this.chart[0] = {data: this.commitServive.extractChartData(commits), labels: this.commitServive.extractChartLabels(commits)};
      console.log(this.chartData);
      console.log(this.chartLabels);
      this.loaded = true;
    });

  }

  public onChartClick(event) {
    console.log(event);
  }






}
