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
  comments: { [key: number]: Comment[] } = {};  // Diccionario para comentarios

  constructor(private http: HttpClient) {}

  // Búsqueda de usuario
  searchUser() {
    this.http.get<{ users: User[] }>(`${this.ROOT_URL}/users/search?q=${this.username}`)
      .subscribe(data => {
        if (data.users && data.users.length > 0) {
          this.usuario = data.users[0];  // Se asigna el usuario
          this.fetchUserPosts(this.usuario.id);  // Se obtienen los posts del usuario
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
      });
  }

  // Obtener los comentarios de un post específico
  fetchComments(postId: number): void {
    this.http.get<{ comments: Comment[] }>(`${this.ROOT_URL}/comments/post/${postId}`)
      .subscribe(data => {
        this.comments[postId] = data.comments;  // Almacena los comentarios bajo el ID del post
        console.log(`Comentarios del post ${postId}:`, this.comments[postId]);
      });
  }
}
