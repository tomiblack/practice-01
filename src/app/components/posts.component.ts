import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  posts$: Observable<MatTableDataSource<Post>>;

  columnsToDisplay = ['title', 'author', 'text'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.posts$ = this.postService.getPosts().pipe(
      map(posts => {
        const tableDataSource = new MatTableDataSource<Post>(posts);
        tableDataSource.sort = this.sort;
        return tableDataSource;
      })
    );
  }

  constructor(private postService: PostService) {}
}
