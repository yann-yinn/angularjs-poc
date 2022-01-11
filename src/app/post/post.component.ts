import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../posts/posts.service";
import { Post } from "../posts/post.types";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  id: string | undefined;
  loading = false;
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.loading = true;
      this.postsService.get(this.id).subscribe((data) => {
        this.post = data;
        this.loading = false;
      });
    }
  }
}
