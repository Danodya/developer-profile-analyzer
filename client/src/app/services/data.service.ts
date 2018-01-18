import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private repoSource = new BehaviorSubject<any[]>([]);

  constructor() { }

}
