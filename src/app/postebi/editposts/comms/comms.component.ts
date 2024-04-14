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

  ngOnInit(): void {
    this.commService.getComments().subscribe((comms) => {
      this.comms = comms;
    });
  }

  addComment(name: string, body: string) {
    // Check if the name or body inputs are empty or consist only of whitespace
    if (!name || !name.trim() || !body || !body.trim()) {
      this.showError = true; // Set the flag to show the error message
      return; // Exit the function to prevent adding an empty comment
    }

    const newComment = { name: name.trim(), body: body.trim() };
    this.comms.unshift(newComment);

    // Clear the input fields and hide the error message after successfully adding a comment
    this.newCommentName = '';
    this.newCommentBody = '';
    this.showError = false;
  }
}
