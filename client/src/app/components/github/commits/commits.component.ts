import {Component, Input, OnInit} from '@angular/core';
import {CommitsService} from "../../../services/github/commits.service";

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
  providers: [CommitsService]
})
export class CommitsComponent implements OnInit {

  protected chartLabels: any[];
  protected chartData: any[];
  @Input() username;

  constructor(protected commitServive: CommitsService) {

    this.chartLabels = [];

   this.commitServive.getCommitDetails("dasunpubudumal").subscribe((commits) => {
     this.chartLabels = this.commitServive.extractChartLabels(commits);
   });


  }

  ngOnInit() {}

  public _get(){
    this.commitServive.getCommitDetails(this.username).subscribe((commits) => {
      this.chartLabels = this.commitServive.extractChartLabels(commits);
      this.chartData = this.commitServive.extractChartData(commits);
      console.log(this.chartData);
      console.log(this.chartLabels);
    });
  }





}
