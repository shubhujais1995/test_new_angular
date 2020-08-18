import { Component } from '@angular/core';
import { PostService } from '../shared/post.service';
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  title = "I love pizza!"
  posts = [];
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails() {
    this.postService.getPosts().subscribe( (posts: any) => {
      this.posts = posts;
      console.log(posts);
    })
  }

}
