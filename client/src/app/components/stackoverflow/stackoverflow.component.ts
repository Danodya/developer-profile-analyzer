import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/stack/user.service";
import {Stackuser} from "../models/stackuser";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.css'],
  providers: [UserService]
})
export class StackoverflowComponent implements OnInit {

  protected id: string;
  protected user: Stackuser;

  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  constructor(protected userService: UserService) {
    this.user = new Stackuser();
    this.id = "4012073";
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.user = new Stackuser();
    this.userService._get(this.id).subscribe(user => {
      console.log(user.items[0]);
        this.user = user.items[0];
    })
  }

  public test() {
    this._get();
    this.dashboard._getBadges();
  }


}
