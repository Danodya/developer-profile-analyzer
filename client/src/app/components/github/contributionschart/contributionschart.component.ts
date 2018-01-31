import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contributionschart',
  templateUrl: './contributionschart.component.html',
  styleUrls: ['./contributionschart.component.css']
})
export class ContributionschartComponent implements OnInit {

  @Input() username: string;
  protected URL: string;

  constructor() {
    this.URL = "http://ghchart.rshah.org/" + this.username;
  }

  ngOnInit() {
  }

  public _get() {
    this.URL = "http://ghchart.rshah.org/" + this.username;
  }

}
