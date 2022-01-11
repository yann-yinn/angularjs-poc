import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { SpeedometerComponent } from "./speedometer/speedometer.component";

const routes: Routes = [
  { path: "", component: PostsComponent },
  { path: "posts/:id", component: PostComponent },
  { path: "speedometer", component: SpeedometerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
