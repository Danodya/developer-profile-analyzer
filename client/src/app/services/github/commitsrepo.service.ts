import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CommitsrepoService {

  private chartData: any[];
  private chartLabels: any[];

  constructor(protected http: HttpClient,
              protected headers: HttpHeaders) {
    this.chartData = [];
    this.chartLabels = [];
  }

  // Use the repository array for this.
  public getLabelsData(array: any[]) : any[] {

    this.chartLabels = [];

    // Create an array of chart labels
    for(let repo of array) {
      this.chartLabels.push(repo.name);
    }

    return this.chartLabels;

  }

  // Use the commits array for this.
  public getCommitCounts(commitsArray: any[], repoArray: any[]) : any[] {

    let count = 0;
    this.chartData = [];



    return this.chartData;

  }

}
