import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  postId: any;
  constructor(public fb: FormBuilder, public post: PostService, public route: ActivatedRoute) {
    this.createForm();
   }

   createForm() {
     this.addPostForm = this.fb.group({
       title: [''],
       body: ['']
     })
   }

   saveForm() {
     if(this.postId !== 0) {
      this.post.updatePost(this.addPostForm.value, this.postId).subscribe(res => {
        if(res) {
          alert('Post updated successfully')
        }
      }) 
     } else {
      this.post.addPost(this.addPostForm.value).subscribe(res => {
        if(res) {
          alert('Post created successfully')
        }
      })
    }
   }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.postId = +res.id || 0;
    })
    if(this.postId !== 0) {
      this.getPostDetails();
    }
  }

  getPostDetails() {
    this.post.editPost(this.postId).subscribe(res => {
      this.addPostForm.patchValue(res)
      // this.addPostForm.setValue({
      //   title: res['title'],
      //   body: res['body']
      // })
    })
  }

}
