import { Routes, RouterModule } from '@angular/router';

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
    UserComponent,
    HomeComponent
} from './components/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // Paths Albums
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'album/:id/photos', component: PhotosComponent },
    { path: 'photo/:id', component: PhotoComponent },
    // Paths Posts
    { path: 'posts', component: PostsComponent },
    { path: 'post/:id', component: PostComponent },
    { path: 'posts/:id/comments', component: CommentsComponent },
    { path: 'comment/:id', component: CommentComponent },
    // Paths ToDos
    { path: 'todos', component: TodosComponent },
    { path: 'todo/:id', component: TodoComponent },
    { path: 'todos/:id/users', component: UsersComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
