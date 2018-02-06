import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WatchersService {

  constructor(protected http: HttpClient) { }

  public _get(username: string) {
    return this.http.get<number>("http://localhost:8080/getwatchers/".concat(username))
      .map(watchers => watchers);
  }

}
