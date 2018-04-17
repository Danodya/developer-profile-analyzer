import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StarsService {

  constructor(protected http: HttpClient) { }

  public _get(username: string) {
    return this.http.get<any[]>("/api/getstarsperlang/".concat(username))
      .map(stars => stars);
  }

}
