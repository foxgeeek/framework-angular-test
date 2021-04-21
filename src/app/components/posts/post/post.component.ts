import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, User } from 'src/app/core/models';
import { PostService, TodoService } from 'src/app/core/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  public post: Post;
  public user: User;
  public postId: number;
  public spinnerActive: boolean = false;

  private subs = new SubSink();

  constructor(
    private postService: PostService,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.getPostById();
  }

  getCommentsByPost(id: number) {
    this.router.navigateByUrl(`posts/${id}/comments`);
  }

  getPostById() {
    this.spinnerActive = true;
    this.subs.sink = this.postService.getPostId(this.postId).subscribe(album => {
      this.post = album;
      this.getUserById(album.userId);
      this.spinnerActive = false;
    })
  }

  getUserById(id: number) {
    this.subs.sink = this.todoService.getUserId(id).subscribe(user => {
      this.user = user;
    })
  }

  getUserId(id: number) {
    this.router.navigateByUrl(`user/${id}`);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
