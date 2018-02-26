import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1LoaderComponent } from './app1-loader.component';

describe('App1LoaderComponent', () => {
  let component: App1LoaderComponent;
  let fixture: ComponentFixture<App1LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
