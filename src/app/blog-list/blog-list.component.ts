import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_service/blog.service';
import { AuthService } from '../_service/auth.service';
import { Category } from '../_Modals/Category';
import { Blog } from '../_Modals/Blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  public blogs : Blog[] |undefined =[];

  constructor(
    private blogService : BlogService ,
    public authService : AuthService
    )
  {
    this.blogService.getBlogs().subscribe(blogs=> this.blogs = blogs);
  }








}
