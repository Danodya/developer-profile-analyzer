import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsComponent } from './mentions.component';
import {HttpClientModule} from "@angular/common/http";

describe('MentionsComponent', () => {
  let component: MentionsComponent;
  let fixture: ComponentFixture<MentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
