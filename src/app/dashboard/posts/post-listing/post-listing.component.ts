import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css']
})
export class PostListingComponent implements OnInit {

  editField: string;
  postList: any = [];

  constructor(public post: PostService, public route: Router) {
    this.getPost();
   }

   getPost() {
     this.post.getPost().subscribe(res => {
       this.postList = res
     })
   }
  ngOnInit() {
  }

  remove(id) {
    this.post.deletePost(id).subscribe(res => {
      alert('Post removed successfully');
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate([''])
  }

}
