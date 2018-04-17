import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TwitterUser} from "../../components/models/twitter-user";

@Injectable()
export class TwitterService {

  constructor(protected http: HttpClient) { }

  public _get(handle: string) {
    return this.http.get<TwitterUser>("/gettwitteruser/".concat(handle))
      .map(res => res);
  }

}
