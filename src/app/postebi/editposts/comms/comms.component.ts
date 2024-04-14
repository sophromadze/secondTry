import { Component, Input, OnInit } from '@angular/core';
import { Comm } from 'src/app/interfaces/comm.interface';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-comms',
  templateUrl: './comms.component.html',
  styleUrls: ['./comms.component.scss'],
})
export class CommsComponent implements OnInit {
  @Input() postId!: number; // postId passed from the parent component
  comms!: Comm[];
  newCommentName: string = '';
  newCommentBody: string = '';
  showError: boolean = false; // Flag to show/hide the error message

  constructor(private commService: CommService) {}

  validateInputs(): boolean {
    return (
      this.newCommentName.trim().length > 0 &&
      this.newCommentBody.trim().length > 0
    );
  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    const storedComments = localStorage.getItem('comms');
    if (storedComments) {
      this.comms = JSON.parse(storedComments);
    } else {
      this.commService.getComments().subscribe((comms) => {
        this.comms = comms;
        this.updateLocalStorage();
      });
    }
  }

  updateLocalStorage() {
    localStorage.setItem('comms', JSON.stringify(this.comms));
  }

  addComment(): void {
    if (this.validateInputs()) {
      const newComment: Comm = {
        id: 0,
        name: this.newCommentName.trim(),
        body: this.newCommentBody.trim(),
      };

      this.commService.addComment(newComment).subscribe({
        next: (addedComment) => {
          this.comms.unshift(addedComment);
          this.updateLocalStorage();
          this.resetInputFields();
        },
        error: (error) => {
          console.error('Failed to add comment:', error);
          this.showError = true;
        },
      });
    } else {
      this.showError = true;
    }
  }

  resetInputFields() {
    this.newCommentName = '';
    this.newCommentBody = '';
    this.showError = false;
  }
}
