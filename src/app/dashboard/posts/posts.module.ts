import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListingComponent } from './post-listing/post-listing.component';
import { AddPostComponent } from './add-post/add-post.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  {path: '', component: PostListingComponent},
  {path: 'edit/:id', component: AddPostComponent},
  {path: 'add-post', component: AddPostComponent}
]

@NgModule({
  declarations: [PostListingComponent, AddPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule
  ]
})
export class PostsModule { }
