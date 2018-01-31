import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionschartComponent } from './contributionschart.component';

describe('ContributionschartComponent', () => {
  let component: ContributionschartComponent;
  let fixture: ComponentFixture<ContributionschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
