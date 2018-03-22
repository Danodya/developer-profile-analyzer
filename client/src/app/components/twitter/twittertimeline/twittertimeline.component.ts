import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {AsyncLocalStorage} from "angular-async-local-storage";

@Component({
  selector: 'app-twittertimeline',
  templateUrl: './twittertimeline.component.html',
  styleUrls: ['./twittertimeline.component.css']
})
export class TwittertimelineComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() handle: string;
  data: any = {sourceType: 'profile',screenName: ''};
  navigationSubscription;

  constructor(
    protected router: Router,
    protected storage: AsyncLocalStorage
  )
  {
    this.router.routeReuseStrategy.shouldReuseRoute = function (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) {
      if (future.url.toString() === 'twitter' && curr.url.toString() === future.url.toString()) {
        return false;
      }
      return (future.routeConfig === curr.routeConfig);
    };
  }

  ngOnInit() {
    // if(this.handle == null) {
    //   this.data.screenName = 'katyperry';
    // }else {
    //   this.data.screenName = this.handle;
    // }

    this.storage.getItem('handle').subscribe((handle) => {
      if(this.handle == null) {this.handle = "katyperry";}
      else {this.handle = handle}
    });

  }

  ngOnChanges() {
    this.update();
  }

  ngAfterViewInit(){
    this.data.screenName = this.handle;
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  update() {
    this.data.screenName = this.handle;
  }

}
