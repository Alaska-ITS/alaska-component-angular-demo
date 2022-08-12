import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsDemoComponent } from './inputs-demo/inputs-demo.component';
import { LayoutDemoComponent } from './layout-demo/layout-demo.component';
import { StartInfoComponent } from './start-info/start-info.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartInfoComponent
  },
  {
    path: 'inputs',
    component: InputsDemoComponent
  },
  {
    path: 'layouts',
    component: LayoutDemoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
