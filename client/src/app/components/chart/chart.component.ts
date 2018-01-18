import {Component, Input, OnInit} from '@angular/core';
import {ChartService} from "../../services/chart.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // This is the child component.

  @Input() repos: any[];

   protected chartOptions = {responsive: true};

  constructor(protected chartService: ChartService) { }

  ngOnInit() {}



}
