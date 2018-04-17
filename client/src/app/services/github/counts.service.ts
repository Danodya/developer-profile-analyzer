import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CountsService {

  constructor(protected http: HttpClient) { }

  public getCounts(username: string) {
    return this.http.get("/getcounts/".concat(username), {headers: {}}).map(counts => counts);
  }

}
