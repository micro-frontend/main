import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app2-loader',
  templateUrl: './app2-loader.component.html',
  styleUrls: ['./app2-loader.component.scss'],
})
export class App2LoaderComponent implements OnInit {

  scripts = [
    '/assets/app2/inline.318b50c57b4eba3d437b.bundle.js',
    '/assets/app2/main.f4cd1b083385563e6896.bundle.js',
    '/assets/app2/polyfills.eaf014b3963b66e17b98.bundle.js',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
