import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-twittertimeline',
  templateUrl: './twittertimeline.component.html',
  styleUrls: ['./twittertimeline.component.css']
})
export class TwittertimelineComponent implements OnInit, OnChanges{

  @Input() handle: string;
  data: any = {sourceType: 'profile',screenName: ''};

  constructor() {
    this.data.screenName = 'katyperry';
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.update();
  }

  update() {
    this.data.screenName = this.handle;
  }

}
