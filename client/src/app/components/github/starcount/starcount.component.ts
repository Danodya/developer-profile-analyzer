import {Component, Input, OnInit} from '@angular/core';
import {StarsService} from "../../../services/github/stars.service";

@Component({
  selector: 'app-starcount',
  templateUrl: './starcount.component.html',
  styleUrls: ['./starcount.component.css'],
  providers: [StarsService]
})
export class StarcountComponent implements OnInit {

  @Input() username: string;
  protected chartData: any[];
  protected chartLabels: any[];
  protected chart: any[];
  protected hasData: boolean;

  protected chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Stars per Language (Top 30)'
    },
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 9
      },
      position: 'left'
    }
  };


  constructor(protected stars: StarsService) {
    this.chart = [{data: [], label: []}];
    this.chartData = [];
    this.chartLabels = [];
    this.hasData = true;

    this.stars._get("dasunpubudumal").subscribe(stars => {
      this.chartData = stars[1];
      this.chartLabels = stars[0];
      this.chart[0] = {data: [], label: []}
    });
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.stars._get(this.username).subscribe(stars => {
      this.chartData = stars[1];
      this.chartLabels = stars[0];
      if(stars[1].length != 0) {
        this.hasData = true;
        this.chart[0] = {data: stars[1], label: stars[0]}}
      else {this.hasData = false;}

    });
  }

}
