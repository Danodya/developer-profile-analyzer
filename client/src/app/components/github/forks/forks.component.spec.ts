import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForksComponent } from './forks.component';
import {ChartsModule} from "ng2-charts";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('ForksComponent', () => {
  let component: ForksComponent;
  let fixture: ComponentFixture<ForksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForksComponent ],
      imports: [ChartsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
