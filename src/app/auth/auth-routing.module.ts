import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pagues/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
