import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.scss'],
})
export class EditpostsComponent implements OnInit {
  post: Post = { id: 0, title: '', body: '', userId: 0 }; // Default values ensure 'post' is never null

  showError = false; // Flag to show/hide error messages

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = +params['id'];
      this.apiService.getPostById(postId).subscribe((post: Post) => {
        this.post = post;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/postebi']);
  }

  validateInputs(): boolean {
    return (
      this.post.title.trim().length > 0 && this.post.body.trim().length > 0
    );
  }

  updatePost(): void {
    if (this.validateInputs()) {
      // Check if inputs are valid
      this.apiService.updatePost(this.post).subscribe(() => {
        this.goBack();
      });
    } else {
      this.showError = true; // Show input validation error messages
    }
  }
}
