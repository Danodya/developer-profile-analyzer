import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommitsService {


  constructor(protected http: HttpClient) {}

  public getCommitDetails(username: string) {
    return this.http.get<any>("http://localhost:8080/getcommitsadapter/".concat(username))
      .map(data => data);
  }

  public extractChartData(chartDetails: any): any[] {

    let chartData = Object.keys(chartDetails);

    return chartData;
  }



}
