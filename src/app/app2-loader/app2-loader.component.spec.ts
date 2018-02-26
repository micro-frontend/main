import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2LoaderComponent } from './app2-loader.component';

describe('App2LoaderComponent', () => {
  let component: App2LoaderComponent;
  let fixture: ComponentFixture<App2LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
