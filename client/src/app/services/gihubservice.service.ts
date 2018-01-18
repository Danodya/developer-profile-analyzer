import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../components/models/user';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

  constructor(protected http: HttpClient) {}

  call(username: string) {
    return this.http.get<User>('http://localhost:8080/getuser/'.concat(username),
      {headers: {}}). map(res => res);
  }

  callRepo(username: string) {
    return this.http.get<any[]>('http://localhost:8080/getrepo/'.concat(username))
      .map(res => res);
  }

}
