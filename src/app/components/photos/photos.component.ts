import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Photo } from "src/app/core/models";
import { AlbumService } from "src/app/core/services";
import { SubSink } from 'subsink';

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"],
})
export class PhotosComponent implements OnInit, OnDestroy {

  public photos: Photo[];
  public albumId: number;
  public spinnerActive: boolean = false;

  private subs = new SubSink();

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.albumId = this.route.snapshot.params.id;
    this.getPhotosByAlbum();
  }

  openPhoto(id: number) {
    this.router.navigateByUrl(`photo/${id}`);
  }

  getPhotosByAlbum() {
    this.spinnerActive = true;
    this.subs.sink = this.albumService.getPhotosByAlbum(this.albumId).subscribe(photos => {
      this.photos = photos;
      this.spinnerActive = false;
      window.scrollTo(0, 0);
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
