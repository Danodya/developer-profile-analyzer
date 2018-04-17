import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterComponent } from './twitter.component';
import {TwittertimelineComponent} from "./twittertimeline/twittertimeline.component";
import {TwitterfollowersComponent} from "./twitterfollowers/twitterfollowers.component";
import {TwitterdashboardComponent} from "./twitterdashboard/twitterdashboard.component";
import {TwitterrealfollowersComponent} from "./twitterrealfollowers/twitterrealfollowers.component";
import {TempComponent} from "./temp/temp.component";

describe('TwitterComponent', () => {
  let component: TwitterComponent;
  let fixture: ComponentFixture<TwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterComponent, TwittertimelineComponent, TwitterfollowersComponent, TwitterdashboardComponent, TwitterrealfollowersComponent, TempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
