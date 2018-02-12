import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class HowtoComponent implements OnInit {

  text: string = "Enter the developer's Github username. Since the search is interactive, you might have to wait a little while to get the data depending on the internet connection.";

  protected showHide: boolean = false;

  constructor() { }

  @Output() tapTargetActions: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  openTapTarget() {
    this.tapTargetActions.emit({action:"tapTarget",params:["open"]});
  }
  closeTapTarget() {
    this.tapTargetActions.emit({action:"tapTarget",params:["close"]});
  }

  toggle() {
    this.showHide = false;
    if(!this.showHide) {
      this.openTapTarget();
      this.showHide = true;
    } else {
      this.closeTapTarget();
      this.showHide = false;
    }
  }


}
