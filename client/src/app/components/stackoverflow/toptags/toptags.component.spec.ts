import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptagsComponent } from './toptags.component';

describe('ToptagsComponent', () => {
  let component: ToptagsComponent;
  let fixture: ComponentFixture<ToptagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptagsComponent ]
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
