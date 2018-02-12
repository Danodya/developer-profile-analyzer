import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ToptagsService} from "../../../services/stack/toptags.service";
import {MaterializeDirective, MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-toptags',
  templateUrl: './toptags.component.html',
  styleUrls: ['./toptags.component.css'],
  providers: [ToptagsService]
})
export class ToptagsComponent implements OnInit {

  @Input() id: string;
  topTags: any[] = [];
  enable: boolean = false;
  actions1 = new EventEmitter<string|MaterializeAction>();
  params = [
    {
      onOpen: (el) => {
        console.log("Collapsible open", el);
      },
      onClose: (el) => {
        console.log("Collapsible close", el);
      }
    }
  ];

  constructor(protected topTagsService: ToptagsService) {
    this.topTags = [];
    this.topTagsService._get("4012073").subscribe(topTags => {
      this.topTags = topTags;
      this.enable = true;
    });
  }

  ngOnInit() {
  }

  public _get() {
    this.topTags = [];
    this.enable = false;
    this.topTagsService._get(this.id).subscribe(topTags => {
      this.topTags = topTags;
      this.enable = true;
    });
  }

  openFirst() {
    this.actions1.emit({action:"collapsible",params:['open',0]});
  }

  closeFirst() {
    this.actions1.emit({action:"collapsible",params:['close',0]});
  }

}
