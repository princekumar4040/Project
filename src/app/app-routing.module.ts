import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path:'', loadChildren:'./login/login.module#LoginModule'},
  { path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
