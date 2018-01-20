import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
  providers: []
})
export class CommitsComponent implements OnInit {

  protected commitsArray: any[];

  constructor() {
    this.commitsArray = [];
  }

  ngOnInit() {}

}
