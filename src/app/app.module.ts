import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const matImports = [
  MatButtonModule,
  MatInputModule,
  MatSortModule,
  MatTableModule
];

@NgModule({
  declarations: [AppComponent, EditPostComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...matImports
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
