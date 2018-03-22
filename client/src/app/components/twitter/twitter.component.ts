import {Component, OnInit, ViewChild} from '@angular/core';
import {TwitterService} from "../../services/twitter/twitter.service";
import {TwitterUser} from "../models/twitter-user";
import {TwittertimelineComponent} from "./twittertimeline/twittertimeline.component";
import {TwitterfollowersComponent} from "./twitterfollowers/twitterfollowers.component";
import {TwitterrealfollowersComponent} from "./twitterrealfollowers/twitterrealfollowers.component";
import {AsyncLocalStorage} from "angular-async-local-storage";

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

  constructor(
    protected twitterService: TwitterService,
    protected storage: AsyncLocalStorage
  )
  {
    this.storage.getItem('handle').subscribe((handle) => {
      console.log(handle);
      // if(this.handle != null){this.handle = handle;}
      // else{this.handle = "katyperry";}
      this.handle = handle;
    });
    this.isDataLoaded = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.twitterService._get(this.handle).subscribe((res) => {
        this.user = res;
        this.isDataLoaded = true;
      })
    }, 2000);
  }

  public _get() {
    this.isDataLoaded = false;
    this.twitterService._get(this.handle).subscribe((res )=> {
      this.user = res;
      setTimeout(() => {
        this.storage.setItem('handle', this.user.screenName).subscribe(() => {});
      }, 800);
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
