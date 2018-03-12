import {Component, Input, OnInit} from '@angular/core';
import {Ng4TwitterTimelineService} from "ng4-twitter-timeline/lib";

@Component({
  selector: 'app-twittertimeline',
  templateUrl: './twittertimeline.component.html',
  styleUrls: ['./twittertimeline.component.css']
})
export class TwittertimelineComponent implements OnInit {

  @Input() handle: string;
  data: any = {sourceType: 'profile',screenName: ''};

  constructor(protected ng4TwitterTimelineService: Ng4TwitterTimelineService) {
    this.data.screenName = 'katyperry';
  }

  ngOnInit() {
  }

  // Whenever handle changes, this function will be executed.
  ngOnChanges() {
    this.update();
  }

  update() {
    this.data.screenName = this.handle;
  }

}
