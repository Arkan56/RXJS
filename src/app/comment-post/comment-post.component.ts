import { Component, Input } from '@angular/core';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent {
  @Input() comments: Comment[] = [];

}
