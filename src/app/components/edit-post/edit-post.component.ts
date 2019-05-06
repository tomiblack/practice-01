import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPostComponent implements OnInit {
  post$: Observable<Post>;
  form$: Observable<FormGroup>;

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap(paramMap => this.postService.get(paramMap.get('id'))),
      shareReplay(1)
    );

    this.form$ = this.post$.pipe(
      map(post =>
        this.fb.group({
          title: [post.title, Validators.required],
          text: [post.text, Validators.required]
        })
      )
    );
  }

  submit(id: number, value: { title: string; text: string }) {
    console.log(id, value);
  }

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
}
