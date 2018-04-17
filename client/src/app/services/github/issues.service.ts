import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class IssuesService {

  constructor(protected http: HttpClient) { }

  public _get(username: string) {
    return this.http.get<number>("http://localhost:8080/getissues/".concat(username))
      .map(issues => issues);
  }
}
