import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './models/user';
import 'rxjs/add/operator/map';
import {Repo} from './models/repo';

@Injectable()
export class GithubService {

  constructor(protected http: HttpClient) {
  }

  call(username: string) {
    return this.http.get<User>('http://localhost:8080/getuser/'.concat(username),
      {headers: {}}).map(res => res);
  }

  callRepo(username: string) {
    return this.http.get('http://localhost:8080/getrepo/'.concat(username),
      {headers: {'Access-Control-Allow-Origin' : '*'}}).map(res => res);
  }

}
