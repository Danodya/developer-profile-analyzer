import {Component, Input, OnInit} from '@angular/core';
import {TwitterfollowersService} from "../../../services/twitter/twitterfollowers.service";
import {TwitterUser} from "../../models/twitter-user";

@Component({
  selector: 'app-twitterfollowers',
  templateUrl: './twitterfollowers.component.html',
  styleUrls: ['./twitterfollowers.component.css'],
  providers: [TwitterfollowersService]
})
export class TwitterfollowersComponent implements OnInit {

  @Input() handle : string;
  handler: string;
  followers: any;
  isDataLoaded: boolean;

  constructor(protected followersService: TwitterfollowersService) {
    this.handle = "katyperry";
    this.isDataLoaded = false;
  }

  ngOnInit() {
    this.followersService._get("katyperry").subscribe((followers) => {
      console.log(followers);
      this.followers = followers.users;
      this.isDataLoaded = true;
    })
  }

  public _get() {
    console.log(this.handle);
    this.isDataLoaded = false;
    this.followersService._get(this.handle).subscribe((followers) => {
      console.log(followers);
      this.followers = followers.users;
      this.isDataLoaded = true;
    })
  }


}
