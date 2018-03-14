import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterrealfollowersComponent } from './twitterrealfollowers.component';

describe('TwitterrealfollowersComponent', () => {
  let component: TwitterrealfollowersComponent;
  let fixture: ComponentFixture<TwitterrealfollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterrealfollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterrealfollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
