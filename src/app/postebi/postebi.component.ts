import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postebi',
  templateUrl: './postebi.component.html',
  styleUrls: ['./postebi.component.scss'],
})
export class PostebiComponent implements OnInit {
  users: User[] | undefined;
  posts: Post[] | undefined;

  newPost: Post = { userId: 0, id: 0, title: '', body: '' };
  newUser: User = { id: 0, name: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    if (this.apiService.users.length === 0) {
      this.apiService.getUsers().subscribe((users) => {
        this.apiService.users = users;
        this.users = this.apiService.users;
      });
    } else {
      this.users = this.apiService.users;
    }

    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  getUsers(userId: number): string {
    const user = this.apiService.users?.find((user) => user.id == userId);
    return user ? user.name : '';
  }

  onPost(postId: number) {
    this.router.navigate(['/editposts', postId]);
  }
}
