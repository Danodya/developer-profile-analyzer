import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stackuser} from "../../components/models/stackuser";

@Injectable()
export class UserService {

  constructor(protected http: HttpClient) { }

  public _get(id: string) {
    return this.http.get<any>("http://localhost:8080/getstackuser/".concat(id))
      .map(user => user);
  }

  public _getQuestions(id: string) {
    return this.http.get<any>("http://localhost:8080/getstackuserquestionscount/".concat(id))
      .map(questions => questions);
  }

}
