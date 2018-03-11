import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/stack/user.service";
import {Stackuser} from "../models/stackuser";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TagsComponent} from "./tags/tags.component";
import {MentionsComponent} from "./mentions/mentions.component";
import {WordcloudComponent} from "./wordcloud/wordcloud.component";
import {ToptagsComponent} from "./toptags/toptags.component";
import {ReputationComponent} from "./reputation/reputation.component";
import {StackerrorComponent} from "./stackerror/stackerror.component";

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.css'],
  providers: [UserService]
})
export class StackoverflowComponent implements OnInit {

  id: string;
  user: Stackuser;
  validated: boolean;

  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  @ViewChild(TagsComponent) tags: TagsComponent;
  @ViewChild(MentionsComponent) mentions: MentionsComponent;
  @ViewChild(WordcloudComponent) wordCloud: WordcloudComponent;
  @ViewChild(ToptagsComponent) topTagsComponent: ToptagsComponent;
  @ViewChild(ReputationComponent) reputation: ReputationComponent;
  @ViewChild(StackerrorComponent) errorComponent: StackerrorComponent;

  constructor(protected userService: UserService) {
    this.user = new Stackuser();
    this.id = "4012073";
    this.validated = true;
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.user = new Stackuser();
    this.userService._get(this.id).subscribe(user => {
      console.log(user.items[0]);
        this.user = user.items[0];
        this.validated = user.validated;
    })
  }

  public test() {
    // this._get();
    setTimeout(() => {
      if(this.validated) {
        console.log(this.validated);
        setTimeout(() => {
          this.dashboard._getBadges();
          this.tags._get();
          this.mentions._get();
          setTimeout(() => {
            this.wordCloud._get();
          }, 2000);
          this.reputation._get();
          this.topTagsComponent._get()
        }, 1000)
        ;
      } else {
        this.errorComponent.openModal();
      }
    }, 2000);
  }

}
