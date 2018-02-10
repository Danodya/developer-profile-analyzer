import {Component, Input, OnInit} from '@angular/core';
import {MentionsService} from "../../../services/stack/mentions.service";

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css'],
  providers: [MentionsService]
})
export class MentionsComponent implements OnInit {

  @Input() id: string
  @Input() username: string;
  mentions: number;
  fav: number;

  constructor(protected mentionsService: MentionsService) {
    this.mentions = 0;
    this.fav = 0;
    this.mentionsService._get("4012073").subscribe(mentions => {
      console.log(mentions.total);
      this.mentions = mentions.total;
    });
    this.mentionsService._getFavorites("4012073").subscribe(fav => {
      this.fav = fav.total;
    })

  }

  ngOnInit() {
  }

  public _get() {
    this.mentionsService._get(this.id).subscribe(mentions => {
      this.mentions = mentions.total;
    });

    this.mentionsService._getFavorites(this.id).subscribe(fav => {
      this.fav = fav.total;
    })
  }

}
