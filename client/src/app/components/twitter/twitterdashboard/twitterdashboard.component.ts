import {Component, Input, OnInit} from '@angular/core';
import {TwitterUser} from "../../models/twitter-user";

@Component({
  selector: 'app-twitterdashboard',
  templateUrl: './twitterdashboard.component.html',
  styleUrls: ['./twitterdashboard.component.css']
})
export class TwitterdashboardComponent implements OnInit {

  @Input() user: TwitterUser;

  constructor() { }

  ngOnInit() {
  }

}
