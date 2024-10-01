import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Post } from './models/Post';
import { Comment } from './models/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TallerRXJS';
  ROOT_URL = 'https://dummyjson.com';
  username: string = '';

  usuarios: User[] = [];
  usuario: User | null = null;
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  // Búsqueda de usuario
  searchUser() {
    this.http.get<{ users: User[] }>(`${this.ROOT_URL}/users/filter?key=username&value=${this.username}`)
      .subscribe(data => {
        if (data.users && data.users.length > 0) {
          this.usuario = data.users[0];
          this.fetchUserPosts(this.usuario.id);
        } else {
          this.usuario = null;
          this.posts = [];
        }
      });
  }

  // Obtener los posts del usuario
  fetchUserPosts(userId: number): void {
    this.http.get<{ posts: Post[] }>(`${this.ROOT_URL}/posts/user/${userId}`)
      .subscribe(data => {
        this.posts = data.posts;
        console.log('Posts del usuario:', this.posts);

        this.posts.forEach(post => {
          this.fetchCommentsForPost(post);
        });
      });
  }

  // Obtener los comentarios para un post específico
  fetchCommentsForPost(post: Post): void {
    this.http.get<{ comments: Comment[] }>(`${this.ROOT_URL}/comments/post/${post.id}`)
      .subscribe(data => {
        post.comments = data.comments;
        console.log(`Comentarios para el post ${post.id}:`, post.comments);
      });
  }
}
