import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcloudComponent } from './wordcloud.component';
import {AgWordCloudModule} from "angular4-word-cloud";
import {HttpClientModule} from "@angular/common/http";

describe('WordcloudComponent', () => {
  let component: WordcloudComponent;
  let fixture: ComponentFixture<WordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordcloudComponent ],
      imports: [AgWordCloudModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
