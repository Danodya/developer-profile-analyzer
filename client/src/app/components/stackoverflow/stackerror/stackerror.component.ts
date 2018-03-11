import {Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-stackerror',
  templateUrl: './stackerror.component.html',
  styleUrls: ['./stackerror.component.css']
})
export class StackerrorComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {}

  openModal(){
    this.modalActions.emit({action:"modal",params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
