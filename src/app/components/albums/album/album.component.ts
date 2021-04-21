import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, User } from 'src/app/core/models';
import { AlbumService, TodoService } from 'src/app/core/services';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {

  public album: Album;
  public user: User;
  public albumId: number;
  public spinnerActive: boolean = false;

  private subs = new SubSink();

  constructor(
    private albumService: AlbumService,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.id;
    this.getAlbumById();
  }

  getPhotosByAlbum(id: number) {
    this.router.navigateByUrl(`album/${id}/photos`);
  }

  getAlbumById() {
    this.spinnerActive = true;
    this.subs.sink = this.albumService.getAlbumId(this.albumId).subscribe(album => {
      this.album = album;
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
