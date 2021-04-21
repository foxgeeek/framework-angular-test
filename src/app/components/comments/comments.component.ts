import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comment, Post } from 'src/app/core/models';
import { PostService } from 'src/app/core/services';
import { SubSink } from 'subsink';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  public comments: Comment[];
  public post: Post;
  public postId: number;
  public panelOpenState: boolean = false;

  private subs = new SubSink();

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
    
  ngOnInit() {
    this.getComments(this.route.snapshot.params.id);
    this.getPostById(this.route.snapshot.params.id);
  }

  getComments(postId: number) {
   this.subs.sink = this.postService.getCommentsByPost(postId).subscribe(comments => {
      this.comments = comments;
    })
  }

  getPostById(postId: number) {
    this.subs.sink = this.postService.getPostId(postId).subscribe(post => {
       this.post = post;
     })
   }

  getAlbumById(id: number) {
    this.router.navigateByUrl(`album/${id}`);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
