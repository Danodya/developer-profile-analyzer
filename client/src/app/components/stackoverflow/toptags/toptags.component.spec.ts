import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptagsComponent } from './toptags.component';
import {MaterializeModule} from "angular2-materialize";
import {CapitalizeFirstPipe} from "../../../pipes/capitalize.pipe";
import {HttpClientModule} from "@angular/common/http";

describe('ToptagsComponent', () => {
  let component: ToptagsComponent;
  let fixture: ComponentFixture<ToptagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptagsComponent, CapitalizeFirstPipe ],
      imports: [MaterializeModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
