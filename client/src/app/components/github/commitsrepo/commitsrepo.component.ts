import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../../services/github/gihubservice.service";
import {CommitsrepoService} from "../../../services/github/commitsrepo.service";

@Component({
  selector: 'app-commitsrepo',
  templateUrl: './commitsrepo.component.html',
  styleUrls: ['./commitsrepo.component.css']
})
export class CommitsrepoComponent implements OnInit {

  constructor(protected githubService: GithubService,
              protected commitsRepo: CommitsrepoService) { }

  ngOnInit() {
  }



}
