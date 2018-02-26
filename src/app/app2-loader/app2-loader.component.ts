import {Component, NgZone, OnInit} from '@angular/core';
import {map, toArray} from 'rxjs/operators';
import {concat} from 'rxjs/observable/concat';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-app2-loader',
  templateUrl: './app2-loader.component.html',
  styleUrls: ['./app2-loader.component.scss'],
})
export class App2LoaderComponent implements OnInit {

  constructor(private http: HttpClient, private zone: NgZone) {
  }

  ngOnInit() {
    const script1 = this.http.get('/assets/app2/inline.318b50c57b4eba3d437b.bundle.js', {responseType: 'text'});
    const script2 = this.http.get('/assets/app2/main.91b2fd630db1889d54b0.bundle.js', {responseType: 'text'});
    const script3 = this.http.get('/assets/app2/polyfills.eaf014b3963b66e17b98.bundle.js', {responseType: 'text'});
    concat(script1, script2, script3).pipe(
      toArray(),
      map((scripts) => scripts.join('\n///////////////////////\n')),
    ).subscribe((content) => {
      this.zone.runOutsideAngular(() => {
        eval(content);
      });
    });
  }

}
