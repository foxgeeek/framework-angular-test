import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/core/services';
import { Post } from 'src/app/core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Post[];
  displayedColumns: string[] = ['id', 'title'];
  dataSource: MatTableDataSource <Post[]>;
  
  private subs = new SubSink();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;  
  
  constructor(
    private postService: PostService,
    private router: Router
  ) { }
    
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
   this.subs.sink = this.postService.getPosts().subscribe(posts => {
      this.dataSource = new MatTableDataSource(posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getPostById(id: number) {
    this.router.navigateByUrl(`post/${id}`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
