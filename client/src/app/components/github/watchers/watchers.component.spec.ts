import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchersComponent } from './watchers.component';
import {HttpClientModule} from "@angular/common/http";

describe('WatchersComponent', () => {
  let component: WatchersComponent;
  let fixture: ComponentFixture<WatchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchersComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
