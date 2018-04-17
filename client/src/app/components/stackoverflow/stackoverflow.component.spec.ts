import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowComponent } from './stackoverflow.component';
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MentionsComponent} from "./mentions/mentions.component";
import {ReputationComponent} from "./reputation/reputation.component"
import {TagsComponent} from "./tags/tags.component";
import {ToptagsComponent} from "./toptags/toptags.component";
import {WordcloudComponent} from "./wordcloud/wordcloud.component";
import {HowtoComponent} from "../github/howto/howto.component";
import {ChartsModule} from "ng2-charts";
import {MaterializeModule} from "angular2-materialize";
import {CapitalizeFirstPipe} from "../../pipes/capitalize.pipe";
import {AgWordCloudModule} from "angular4-word-cloud";
import {HttpClientModule} from "@angular/common/http";
import {StackerrorComponent} from "./stackerror/stackerror.component";

describe('StackoverflowComponent', () => {
  let component: StackoverflowComponent;
  let fixture: ComponentFixture<StackoverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StackoverflowComponent,
        DashboardComponent,
        MentionsComponent,
        ReputationComponent,
        TagsComponent,
        ToptagsComponent,
        WordcloudComponent,
        HowtoComponent,
        CapitalizeFirstPipe,
        StackerrorComponent
      ],
      imports: [FormsModule, ChartsModule, MaterializeModule, AgWordCloudModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
