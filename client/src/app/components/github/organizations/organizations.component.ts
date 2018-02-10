import {Component, Input, OnInit} from '@angular/core';
import {OrganizationsService} from "../../../services/github/organizations.service";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
  providers: [OrganizationsService]

})
export class OrganizationsComponent implements OnInit {

  @Input() username: string;
  organizations_count: number;

  constructor(protected organizationsService: OrganizationsService) {
    this.organizations_count = 0;
  }

  ngOnInit() {
    this._get();
  }

  public _get() {
    this.organizationsService._get(this.username).subscribe(orgs => {
      this.organizations_count = orgs;
    });
  }

}
