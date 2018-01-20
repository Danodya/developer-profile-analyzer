import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommitsService {

  constructor(protected http: HttpClient) {}

}
