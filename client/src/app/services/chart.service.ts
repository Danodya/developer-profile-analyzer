import { Injectable } from '@angular/core';
import {User} from "../components/models/user";

@Injectable()
export class ChartService {

  private chartData: any[];
  private chartLabels: any[];

  constructor() {}

  public getLabelsData(array: any[]) : any[] {

    // Create an array of
    for(let repo of array) {
      this.chartLabels.push(repo.language);
    }

    // Remove Duplicates and return a new array.
    return this.chartData.filter((elem, index, self) => {
      return index == self.indexOf(elem);
    });
  }

  public getRepoCounts(array: any[]) : any[] {

    let count = 0;

    for(let lang of this.chartLabels){
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
