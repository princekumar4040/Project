import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const route: Routes = [
  {path: '', component: DashboardComponent},
  { path:'posts', loadChildren:'./posts/posts.module#PostsModule'},
  { path:'users', loadChildren:'./users/users.module#UsersModule'}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class DashboardModule { }
