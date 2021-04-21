import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { COMMENTS, POSTS } from "../api/app.api";
import { Comment, Post } from "../models";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any>(`${POSTS}`);
  }

  getPostId(post: Post) {
    return this.http.get<any>(`${POSTS}/${post.id}`);
  }

  getComments() {
    return this.http.get<any>(`${COMMENTS}`);
  }

  getCommentId(comment: Comment) {
    return this.http.get<any>(`${COMMENTS}/${comment.id}`);
  }
  
}
