import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/core/models';
import { AlbumService } from 'src/app/core/services';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  public photo: Photo;
  public photoId: number;
  public spinnerActive: boolean = false;
  
  private subs = new SubSink();

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.photoId = this.route.snapshot.params.id;
    this.getPhotoById();
  }

  getPhotoById() {
    this.spinnerActive = true;
    this.subs.sink = this.albumService.getPhotoId(this.photoId).subscribe(photo => {
      this.photo = photo;
      this.spinnerActive = false;
      window.scrollTo(0, 0);
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
