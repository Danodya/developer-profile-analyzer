import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TwitterrealService {

  constructor(protected http: HttpClient) { }

  public _get(handle: string) {
    return this.http.get<any>("/gettwitterfollowers/".concat(handle))
      .map(res => res);
  }
}
