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

  getPostId(id: number) {
    return this.http.get<any>(`${POSTS}/${id}`);
  }

  getComments() {
    return this.http.get<any>(`${COMMENTS}`);
  }

  getCommentsByPost(id: number) {
    return this.http.get<any>(`${COMMENTS}?postId=${id}`);
  }

  getCommentId(id: number) {
    return this.http.get<any>(`${COMMENTS}/${id}`);
  }
  
}
