import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommitsService {


  constructor(protected http: HttpClient) {}

  public getCommitDetails(username: string) {
    return this.http.get<any>("/getcommitsadapterRe/".concat(username))
      .map(data => data);
  }

  public extractChartLabels(chartDetails: any): any[] {
    return Object.keys(chartDetails);
  }

  public extractChartData(chartDetails: any): any[] {
    return Object.values(chartDetails);
  }





}
