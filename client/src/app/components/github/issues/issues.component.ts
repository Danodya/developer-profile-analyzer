import {Component, Input, OnInit} from '@angular/core';
import {IssuesService} from "../../../services/github/issues.service";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [IssuesService]
})
export class IssuesComponent implements OnInit {

  @Input() username: string;
  protected issues_count: number;

  constructor(protected issuesService: IssuesService) {
    this.issues_count = 0;
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.issuesService._get(this.username).subscribe(issues => {
      this.issues_count = issues;
    });
  }


}
