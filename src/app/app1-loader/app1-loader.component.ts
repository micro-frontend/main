import {Component, NgZone, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {zip} from 'rxjs/observable/zip';

@Component({
  selector: 'app-app1-loader',
  templateUrl: './app1-loader.component.html',
  styleUrls: ['./app1-loader.component.scss'],
})
export class App1LoaderComponent implements OnInit {

  constructor(private http: HttpClient, private zone: NgZone) {
  }

  ngOnInit() {
    const script1 = this.http.get('/assets/app1/inline.318b50c57b4eba3d437b.bundle.js', {responseType: 'text'})
      .pipe(delay(1000));
    const script2 = this.http.get('/assets/app1/main.c73d689ea7a0f3e667e5.bundle.js', {responseType: 'text'});
    const script3 = this.http.get('/assets/app1/polyfills.eaf014b3963b66e17b98.bundle.js', {responseType: 'text'});
    zip(script1, script2, script3, (...scripts) => scripts.join('\n///////////////////////\n')).subscribe((content) => {
      this.zone.runOutsideAngular(() => {
        eval(content);
      });
    });
  }

}
