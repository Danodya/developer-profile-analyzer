import {Component, Input, OnInit} from '@angular/core';
import {ReputationService} from "../../../services/stack/reputation.service";

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.css'],
  providers: [ReputationService]
})
export class ReputationComponent implements OnInit {

  @Input() id: string;
  chart: any[];
  chartLabels: any[];
  chartData: any[number];
  enable: boolean = false;
  chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Reputation Changes'
    },
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 5
      },
      position: 'top'
    }
  };
  chartColors: any[] = [
    {
      backgroundColor:["#0091ea"]
    }];

  constructor(protected reputation: ReputationService) {
    this.chart = [];
    this.chartData = [];
    this.chartLabels = [];
    this.reputation._get("4012073").subscribe(rep => {
      for(let r of rep){
        this.chartData.push(r.reputation_change);
        // console.log(this.chartData);
        let date = new Date(r.on_date*1000);
        this.chartLabels.push(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
        // console.log(rep.reputation_change);
      }
      this.enable = true;
    });
    this.chart[0] = {data: this.chartData, labels: this.chartLabels};
    // setTimeout(() => {
      console.log(this.chart);
    // }, 3000);

  }

  ngOnInit() {
  }

  public _get() {
    this.chart = [];
    this.chartData = [];
    this.chartLabels = [];
    this.enable = false;
    this.reputation._get(this.id).subscribe(rep => {
      for(let r of rep){
        this.chartData.push(r.reputation_change);
        // console.log(this.chartData);
        let date = new Date(r.on_date*1000);
        this.chartLabels.push(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
        // console.log(rep.reputation_change);
      }
      this.enable = true;
    });
    this.chart[0] = {data: this.chartData, labels: this.chartLabels};
  }

  public onChartClick(event) {
    console.log(event);
  }

}
