import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app1-loader',
  templateUrl: './app1-loader.component.html',
  styleUrls: ['./app1-loader.component.scss'],
})
export class App1LoaderComponent implements OnInit {

  scripts = [
    '/assets/app1/inline.318b50c57b4eba3d437b.bundle.js',
    '/assets/app1/main.64c2204bc41863fb4faa.bundle.js',
    '/assets/app1/polyfills.eaf014b3963b66e17b98.bundle.js',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
