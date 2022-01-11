import { Component, OnInit } from "@angular/core";
import { Post } from "./post.types";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.postsService.getAll().subscribe((data) => {
      this.posts = data;
      this.loading = false;
    });
  }
}
