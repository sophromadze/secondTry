import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { PostebiComponent } from './postebi/postebi.component';
import { EditpostsComponent } from './postebi/editposts/editposts.component';
import { AddpostComponent } from './postebi/addpost/addpost.component';
import { PhotosComponent } from './albums/photos/photos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'postebi', component: PostebiComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'editposts/:id', component: EditpostsComponent },
  { path: 'addpost', component: AddpostComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
