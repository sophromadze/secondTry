import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { PostebiComponent } from './postebi/postebi.component';
import { EditpostsComponent } from './postebi/editposts/editposts.component';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from './postebi/addpost/addpost.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { AddpostsComponent } from './posts/addposts/addposts.component';
import { CommsComponent } from './postebi/editposts/comms/comms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AlbumsComponent,
    TodosComponent,
    PostebiComponent,
    EditpostsComponent,
    AddpostComponent,
    PhotosComponent,
    PostsComponent,
    AddpostsComponent,
    CommsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
