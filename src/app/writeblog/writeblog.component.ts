import { Component, OnInit } from '@angular/core';
import { Blog } from '../_Modals/Blog';
import { Category } from '../_Modals/Category';
import { BlogService } from '../_service/blog.service';
import { CategoryService } from '../_service/category.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css']
})
export class WriteblogComponent implements OnInit {

  constructor(
    private blogService: BlogService,
    private categoryService: CategoryService,
    private authService : AuthService,
    private router : Router
  ){}
  ngOnInit(): void {
    this.getCategory();
  }

    blog : Blog = new Blog();
    categorySelect : string = "";
    categories : Category[] = [];

    getCategory()
    {
      this.categoryService.getCategory().subscribe(next=>
        {
          this.categories = next;
        },err=>
        {
          console.log(err.error);
        }
      );
    }

    getCategoryId(categoryName: string): number
    {
      const category : any = this.categories.find(c => c.name === categoryName);
      return category ? category.id : null;
    }

    addBlog()
    {
      this.blog.categoryId = this.getCategoryId(this.categorySelect);
      this.blog.yazarId = this.authService.decodedToken.nameid;
      this.blogService.addBlog(this.blog).subscribe(next=>{
        console.log(next);
      },err=>{
        console.log(err);
      })
      console.log(this.blog);
      this.router.navigate(['/']);
    }
}
