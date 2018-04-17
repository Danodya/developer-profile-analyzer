import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MentionsService {

  constructor(protected http: HttpClient) { }

  public _get(id: string) {
    return this.http.get<any>("/getstackusermensions/".concat(id))
      .map(mentions => mentions);
  }

  public _getFavorites(id: string) {
    return this.http.get<any>("/getstackuserfavorites/".concat(id))
      .map(fav => fav);
  }
}
