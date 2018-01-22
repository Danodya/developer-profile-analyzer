import { Component, OnInit } from '@angular/core';
import {CommitsService} from "../../../services/github/commits.service";

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
  providers: [CommitsService]
})
export class CommitsComponent implements OnInit {

  protected chartLabels: any[];

  constructor(protected commitServive: CommitsService) {

    this.chartLabels = [];

   this.commitServive.getCommitDetails("dasunpubudumal").subscribe((commits) => {
     this.chartLabels = this.commitServive.extractChartData(commits);
     console.log(this.chartLabels);
   });

  }

  ngOnInit() {}

}
