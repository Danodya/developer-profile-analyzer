import {Component, Input, OnInit} from '@angular/core';
import {TagsService} from "../../../services/stack/tags.service";
import {AgWordCloudData} from "angular4-word-cloud";

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.css'],
  providers: [TagsService]
})
export class WordcloudComponent implements OnInit {

  @Input() id: string;
  @Input() username: string;
  bool: boolean = false;
  myWordData: Array<AgWordCloudData> = [];
  options = {
    settings: {
      minFontSize: 10,
      maxFontSize: 100,
    },
    margin: {
      top: 5,
      right: 5,
      bottom: 10,
      left: 5
    },
    labels: false // false to hide hover labels
  };
  colors: Array<string> = ["#64b5f6", "#0d47a1", "#3f51b5", "#1a237e", "#004d40", "#1b5e20", "#4caf50", "#0097a7", "#00b8d4"];

  constructor(protected tagsService: TagsService) {
    this.tagsService._get("4012073").subscribe(tags => {
      tags[0].forEach((value) => {
        // console.log(value);
        this.myWordData.push({size: Math.floor(Math.random() * Math.floor(1000)), text: value.toLocaleString()})
      });
      this.bool = true;
      // console.log(this.myWordData);
    });
  }

  ngOnInit() {
  }

  public _get() {
    this.bool = false;
    this.myWordData = [];
    this.tagsService._get(this.id).subscribe(tags => {
      tags[0].forEach((value) => {
        this.myWordData.push({size: Math.floor(Math.random() * Math.floor(1000)), text: value.toLocaleString()})
      });
      this.bool = true;
    });
  }

}
