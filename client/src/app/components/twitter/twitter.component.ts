import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../../services/twitter/twitter.service";
import {TwitterUser} from "../models/twitter-user";

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers: [TwitterService]
})
export class TwitterComponent implements OnInit {

  handle: string;
  user: TwitterUser;
  isDataLoaded: boolean;

  constructor(protected twitterService: TwitterService) {
    this.handle = "katyperry";
    this.isDataLoaded = false;
  }

  ngOnInit() {
    this.twitterService._get("katyperry").subscribe((res) => {
      this.user = res;
      this.isDataLoaded = true;
    })
  }

  public _get() {
    this.isDataLoaded = false;
    this.twitterService._get(this.handle).subscribe((res )=> {
      this.user = res;
      this.isDataLoaded = true;
    })
  }

  test() {
    this._get();
  }

}
