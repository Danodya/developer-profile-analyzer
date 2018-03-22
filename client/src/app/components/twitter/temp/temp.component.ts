import
{
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'ng4-twitter-timeline',
  template: ``,
  styles: [ `` ],
  providers: []
})
export class TempComponent implements OnInit, AfterViewInit
{
  @Input() dataSrc: object;
  @Input() opts: object;

  readonly TWITTER_SCRIPT_ID = 'twitter-wjs';
  readonly TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';

  constructor(private element: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit()
  {
    //MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
    this.LoadScript().subscribe
    (
      //SUCCESS, WE HAVE TWITTER WIDGETS JS FILE LOADED...
      twttr =>
      {
        const nativeElement = this.element.nativeElement;

        window['twttr'].widgets.createTimeline(this.dataSrc, nativeElement, this.opts).then
        (
          function success(embed)
          {
            //console.log('Created tweet widget: ', embed);
          }
        ).catch
        (
          function creationError(message)
          {
            //console.log('Could not create widget: ', message);
          }
        );
      },

      //ERROR
      err =>
      {
        console.log('****  ERROR LOADING TWITTER WIDGET', err);
      },

      //COMPLETE
      () =>
      {
      }
    );
  }

  private onTwitterLoaded(twttr)
  {
    console.log('TWITTER LOADED YO', twttr);
  };

   LoadScript(): Observable<any>
  {
    const that = this;

    return Observable.create(observer =>
    {
      //START LOADING SCRIPT INTO DOM
      that.startScriptLoad();

      //WHEN TWITTER WIDGETS SCRIPT IS LOADED, THEN PASS ALONG....
      window['twttr'].ready
      (
        function onLoadTwitterScript(twttr)
        {
          observer.next(twttr);
          observer.complete();
        }
      );
    });
  };

  private startScriptLoad()
  {
    window['twttr'] = (function(d, s, id, url)
    {
      var js,
      fjs = d.getElementsByTagName(s)[0],
      t = window['twttr'] || {};

      if (d.getElementById(id)) {return t;}

      js = d.createElement(s);
      js.id = id;
      js.src = url;
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];

      t.ready = function(f)
      {
        t._e.push(f);
      };

      return t;
    }(document, "script", this.TWITTER_SCRIPT_ID, this.TWITTER_WIDGET_URL));
  }
}
