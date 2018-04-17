import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ForksService {

  constructor(protected http: HttpClient) { }

  public _get(username: string) {
    return this.http.get<any[]>("/getforks/".concat(username))
      .map(forks => forks);
  }

}
