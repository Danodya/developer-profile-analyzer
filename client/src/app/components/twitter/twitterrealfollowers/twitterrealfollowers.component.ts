import {Component, Input, OnInit} from '@angular/core';
import {TwitterrealService} from "../../../services/twitter/twitterreal.service";

@Component({
  selector: 'app-twitterrealfollowers',
  templateUrl: './twitterrealfollowers.component.html',
  styleUrls: ['./twitterrealfollowers.component.css'],
  providers: [TwitterrealService]
})
export class TwitterrealfollowersComponent implements OnInit {

  @Input() handle: string;
  followers: any;
  isDataRetrieved: boolean;

  constructor(protected realFollowers: TwitterrealService) {
    this.handle = "katyperry";
    this.isDataRetrieved = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.realFollowers._get("katyperry").subscribe((followers) => {
        console.log(followers.users);
        this.followers = followers.users;
        this.isDataRetrieved = true;
      });
    }, 2000);
  }

  public _get() {
    this.isDataRetrieved = false;
    this.realFollowers._get(this.handle).subscribe((followers) => {
      this.followers = followers.users;
      this.isDataRetrieved = true;
    });
  }
}
