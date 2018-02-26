import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAppLoaderComponent } from './dynamic-app-loader.component';

describe('DynamicAppLoaderComponent', () => {
  let component: DynamicAppLoaderComponent;
  let fixture: ComponentFixture<DynamicAppLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAppLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAppLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
