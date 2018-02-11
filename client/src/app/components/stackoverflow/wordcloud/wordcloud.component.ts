import {Component, Input, OnInit} from '@angular/core';
import {TagsService} from "../../../services/stack/tags.service";
import {AgWordCloudData} from "angular4-word-cloud";
import {forEach} from "@angular/router/src/utils/collection";
import {stringDistance} from "codelyzer/util/utils";

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.css'],
  providers: [TagsService]
})
export class WordcloudComponent implements OnInit {

  @Input() id: string;
  bool: boolean = false;
  myWordData: Array<AgWordCloudData> = [];
  wordData: Array<AgWordCloudData> = [
    {size: 500, text: "vitae"},
    {size: 301, text: "amet"},
    {size: 123, text: 'sit'},
    {size: 321, text: 'eget'},
    {size: 231, text: 'quis'},
    {size: 123, text: 'sem'},
    {size: 346, text: 'massa'},
    {size: 107, text: 'nec'},
    {size: 436, text: 'sed'},
    {size: 731, text: 'semper'},
    {size: 80, text: 'scelerisque'},
    {size: 96, text: 'egestas'},
    {size: 531, text: 'libero'},
    {size: 109, text: 'nisl'},
    {size: 972, text: 'odio'},
    {size: 213, text: 'tincidunt'},
    {size: 294, text: 'vulputate'},
    {size: 472, text: 'venenatis'},
    {size: 297, text: 'malesuada'},
    {size: 456, text: 'finibus'},
    {size: 123, text: 'tempor'},
    {size: 376, text: 'tortor'},
    {size: 93, text: 'congue'},
    {size: 123, text: 'possit'},
  ];

  options = {
    settings: {
      minFontSize: 10,
      maxFontSize: 100,
    },
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    labels: true // false to hide hover labels
  };

  constructor(protected tagsService: TagsService) {
    this.tagsService._get("4012073").subscribe(tags => {
      tags[0].forEach((value) => {
        // console.log(value);
        this.myWordData.push({size: Math.floor(Math.random() * Math.floor(1000)), text: value.toLocaleString()})
      });
      this.bool = true;
      console.log(this.myWordData);
    });
  }

  ngOnInit() {
  }

  public _get() {
    // this.tagsService._get(this.id).subscribe(tags => {
    //
    // });
  }

}
