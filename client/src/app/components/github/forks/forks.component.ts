import {Component, Input, OnInit} from '@angular/core';
import {ForksService} from "../../../services/github/forks.service";

@Component({
  selector: 'app-forks',
  templateUrl: './forks.component.html',
  styleUrls: ['./forks.component.css'],
  providers: [ForksService]
})
export class ForksComponent implements OnInit {

  @Input() username: string;
  chartLabels: any[];
  chartData: any[];
  chart: any[];
  hasData: boolean;
   chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Forks per Language (Top 30)'
    },
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 9
      },
      position: 'left'
    }
  };

  constructor(protected forkService: ForksService) {
    this.chartLabels = [];
    this.chartData = [];
    this.chart = [{data: [], label: []}];
    this.hasData = true;

    this.forkService._get("dasunpubudumal").subscribe(forks => {
      this.chartLabels = forks[0];
      this.chartData = forks[1];
      this.chart[0] = {data: forks[1], label: forks[0]}
    });
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.forkService._get(this.username).subscribe(forks => {
      this.chartLabels = forks[0];
      this.chartData = forks[1];
      if(forks[1].length != 0) {
        this.chart[0] = {data: forks[1], label: forks[0]};
        this.hasData = true;
      }else {this.hasData = false}
    });
  }

  public onChartClick(event) {
    console.log(event);
  }

}
