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
  protected chartLabels: any[];
  protected chartData: any[];
  protected chart: any[];
  @Input() username;
  protected chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Commits per a Repository'
    },
    legend: {
      labels: {
        fontColor: 'black'
      }
    }
  };

  constructor(protected commitServive: CommitsService,
              private spinnerService: Ng4LoadingSpinnerService) {

    this.chart = [];
    this.chartLabels = [];
    this.loaded = false;

    // this.spinnerService.show();
    this.commitServive.getCommitDetails("dasunpubudumal").subscribe((commits) => {
     this.chartLabels = this.commitServive.extractChartLabels(commits);
      // this.spinnerService.hide();
   });


  }

  ngOnInit() {}

  public _get(){
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
