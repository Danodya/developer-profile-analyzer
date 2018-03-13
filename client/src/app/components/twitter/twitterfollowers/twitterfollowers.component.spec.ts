import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterfollowersComponent } from './twitterfollowers.component';

describe('TwitterfollowersComponent', () => {
  let component: TwitterfollowersComponent;
  let fixture: ComponentFixture<TwitterfollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterfollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterfollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
