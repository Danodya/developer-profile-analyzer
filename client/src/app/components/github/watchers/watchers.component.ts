import {Component, Input, OnInit} from '@angular/core';
import {WatchersService} from "../../../services/github/watchers.service";

@Component({
  selector: 'app-watchers',
  templateUrl: './watchers.component.html',
  styleUrls: ['./watchers.component.css'],
  providers: [WatchersService]
})
export class WatchersComponent implements OnInit {

  @Input() username: string;
  protected watchers: number;


  constructor(protected watcherService: WatchersService) {
    this.watchers = 0;
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.watcherService._get(this.username).subscribe(watchers => {
      this.watchers = watchers;
    });
  }

}
