import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url: string = 'http://jsonplaceholder.typicode.com/posts'
  constructor(public http: HttpClient) { 
  }

  getPost() {
    return this.http.get(this.url);
  }
  
  addPost(post) {
    return this.http.post(this.url, post)
  }

  editPost(id) {
    return this.http.get(this.url+'/'+`${id}`);
  }

  updatePost(data, id) {
    return this.http.put(this.url+'/'+`${id}`, data);
  }

  deletePost(id) {
    return this.http.delete(this.url+'/'+`${id}`);
  }
}
