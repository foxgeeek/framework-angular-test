import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import {
  AlbumService,
  PostService,
  TodoService
} from './core/services/index';

import {
  AlbumsComponent,
  AlbumComponent,
  PhotosComponent,
  PhotoComponent,
  PostsComponent,
  PostComponent,
  CommentsComponent,
  CommentComponent,
  TodosComponent,
  TodoComponent,
  UsersComponent,
  UserComponent
} from './components/index';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    routing,
  ],
  declarations: [
    AppComponent,
    AlbumsComponent,
    PostsComponent,
    UsersComponent,
    CommentsComponent,
    TodosComponent,
    TodoComponent,
    PhotosComponent,
    AlbumComponent,
    CommentComponent,
    PhotoComponent,
    PostComponent,
    UserComponent,
    MenuComponent,
    HomeComponent
  ],
  providers: [
    AlbumService,
    PostService,
    TodoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
