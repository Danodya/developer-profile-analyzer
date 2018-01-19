import { Injectable } from '@angular/core';
import {User} from "../../components/models/user";

@Injectable()
export class ChartService {

  private chartData: any[];
  private chartLabels: any[];

  constructor() {
    this.chartData = [];
    this.chartLabels = [];
  }

  public getLabelsData(array: any[]) : any[] {

    this.chartLabels = [];

    // Create an array of chart labels
    for(let repo of array) {
      this.chartLabels.push(repo.language);
    }

    return this.chartLabels.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });

  }

  public getRepoCounts(array: any[], labelArray: any[]) : any[] {

    let count = 0;
    this.chartData = [];

    for(let lang of labelArray){
      for(let repo of array) {
        if (repo.language == lang) {
          count++;
        }
      }
      this.chartData.push(count);
      count = 0;
    }

    return this.chartData;

  }




}
