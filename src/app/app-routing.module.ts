import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartInfoComponent } from './start-info/start-info.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartInfoComponent
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
