import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/stack/user.service";
import {User} from "../../models/user";
import {Stackuser} from "../../models/stackuser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

  @Input() id: string;
  @Input() user: Stackuser;
  protected questions: number;
  protected answers: number;
  protected bronze: number;
  protected silver: number;
  protected gold: number;

  constructor(protected userService: UserService) {
    this.bronze = 0;
    this.silver = 0;
    this.gold = 0;
    this.questions = 0;

    this.userService._get("4012073").subscribe(user => {
      this.bronze = user.items[0].badge_counts.bronze;
      this.silver = user.items[0].badge_counts.silver;
      this.gold = user.items[0].badge_counts.gold;
    });

    this.userService._getQuestions("4012073").subscribe(q => {
      this.questions = q.total;
    });

  }

  ngOnInit() {
    this._getBadges();
    this._getQuestions();
  }

  public _getBadges() {
    this.userService._get(this.id).subscribe(user => {
      this.bronze = user.items[0].badge_counts.bronze;
      this.silver = user.items[0].badge_counts.silver;
      this.gold = user.items[0].badge_counts.gold;
    })
  }

  public _getQuestions() {
    this.userService._getQuestions(this.id).subscribe(q => {
      this.questions = q.total;
    })
  }

}
