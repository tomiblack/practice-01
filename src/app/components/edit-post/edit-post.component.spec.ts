import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { EditPostComponent } from './edit-post.component';
import { PostService } from '../../services/post.service';
import { By } from '@angular/platform-browser';
import { of, EMPTY, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute, Params, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostsComponent } from '../posts/posts.component';
import { matImports } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;
  let postService: PostService;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPostComponent, PostsComponent],
      providers: [PostService],
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        ...matImports
      ]
    });

    fixture = TestBed.createComponent(EditPostComponent);
    component = fixture.componentInstance;
    postService = TestBed.get(PostService);
    route = TestBed.get(ActivatedRoute);

    spyOn(postService, 'get').and.callFake(
      (id: string): Observable<Post> => {
        if (id === '23') {
          return of({
            id: 23,
            author: 'test author',
            title: 'test title',
            text: 'test text'
          });
        }

        return EMPTY;
      }
    );

    route.params = of({ id: '23' });
  });

  it('can create component instance', () => {
    expect(component).toBeTruthy();
  });

  it('shows post title after init', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent.trim()).toBe('Edit "test title"');
  }));
});
