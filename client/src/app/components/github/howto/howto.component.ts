import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class HowtoComponent implements OnInit {

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
