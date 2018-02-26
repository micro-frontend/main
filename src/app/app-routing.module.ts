import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {App1LoaderComponent} from './app1-loader/app1-loader.component';
import {App2LoaderComponent} from './app2-loader/app2-loader.component';

const routes: Routes = [
  {
    path: 'app1',
    component: App1LoaderComponent,
  },
  {
    path: 'app2',
    component: App2LoaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
