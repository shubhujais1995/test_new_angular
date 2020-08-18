import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';
import { PostService } from '../shared/post.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
xdescribe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the titel 'i love pizza!'`, async( () => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('I love pizza!');
  }))

  // it(`should call service.getPosts`, fakeAsync(() => {
  //   fixture = TestBed.createComponent(PizzaComponent);
  //   component = fixture.componentInstance;

  //   let postService = fixture.debugElement.injector.get(PostService);
  //   let stub = spyOn(postService, "getPosts").and.callFake( () => {
  //     return of([]).pipe(delay(300))
  //   })

  //   component.getPostDetails();
  //   expect(component.posts).toEqual([]);
  // }))
});
