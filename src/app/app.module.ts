import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostUserComponent } from './post-user/post-user.component';
import { CommentPostComponent } from './comment-post/comment-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    PostUserComponent,
    CommentPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
