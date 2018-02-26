import {Component, Input, NgZone, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {zip} from 'rxjs/observable/zip';
import {map} from 'rxjs/operators';
import {nextId} from '../utils/next-id';

@Component({
  selector: 'app-dynamic-app-loader',
  templateUrl: './dynamic-app-loader.component.html',
  styleUrls: ['./dynamic-app-loader.component.scss'],
})
export class DynamicAppLoaderComponent implements OnInit {

  id = nextId();

  @Input()
  scripts: string[] = [];

  get placeholder(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`<app-root-${this.id}></app-root-${this.id}>`);
  }

  constructor(private http: HttpClient, private zone: NgZone, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const scripts = this.scripts.map(url => this.http.get(url, {responseType: 'text'}));
    zip(...scripts, (...contents) => contents.join('\n//////////////////\n'))
      .pipe(
        map(content => content.replace('__AppLoaderDynamicId__', this.id)),
      )
      .subscribe((content) => {
        this.zone.runOutsideAngular(() => {
          // tslint:disable:no-eval
          eval(content);
        });
      });
  }

  get instance(): any {
    return window[this.id];
  }
}
