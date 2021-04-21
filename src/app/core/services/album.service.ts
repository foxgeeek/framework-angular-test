import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ALBUMS, PHOTOS } from './../api/app.api';

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get<any>(`${ALBUMS}`);
  }

  getAlbumId(id: number) {
    return this.http.get<any>(`${ALBUMS}/${id}`);
  }
  
  getPhotosByAlbum(id: number) {
    return this.http.get<any>(`${PHOTOS}?albumId=${id}`);
  }
  
  getPhotos() {
    return this.http.get<any>(`${PHOTOS}`);
  }

  getPhotoId(id: number) {
    return this.http.get<any>(`${PHOTOS}/${id}`);
  }
  
}