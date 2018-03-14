import {Component, OnInit, ViewChild} from '@angular/core';
import {TwitterService} from "../../services/twitter/twitter.service";
import {TwitterUser} from "../models/twitter-user";
import {TwittertimelineComponent} from "./twittertimeline/twittertimeline.component";
import {TwitterfollowersComponent} from "./twitterfollowers/twitterfollowers.component";
import {TwitterrealfollowersComponent} from "./twitterrealfollowers/twitterrealfollowers.component";

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

  @ViewChild(TwittertimelineComponent) timeline: TwittertimelineComponent;
  @ViewChild(TwitterfollowersComponent) followers: TwitterfollowersComponent;
  @ViewChild(TwitterrealfollowersComponent) realFollowers: TwitterrealfollowersComponent;

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

  public test() {
    this._get();
    setTimeout(() => {
      this.timeline.update();
      this.followers._get();
      setTimeout(() => {
        this.realFollowers._get();
      }, 1000);
    }, 2000);
  }

}
