import { Component, OnInit } from '@angular/core';
import { Blog } from '../_Modals/Blog';
import { BlogService } from '../_service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { YorumService } from '../_service/yorum.service';
import { Yorum } from '../_Modals/Yorum';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog = new Blog();
  yorums : Yorum[] = [];
  constructor(
    public blogService: BlogService,
    private route: ActivatedRoute,
    private yorumService: YorumService
  ){}


  ngOnInit(): void {
        this.getBlog();
        this.getYorums();
    }



    getBlog() {
      this.blogService.getBlog(this.route.snapshot.params['id']).subscribe(blog => {
        this.blog = blog;
      }, err => {
        console.log(err.error);
      });
    }

    getYorums(){
      this.yorumService.getYorumByBlog(this.route.snapshot.params["id"]).subscribe(next=>{
        this.yorums = next;
        console.log(this.yorums);
      },err=>{
        console.log(err.error);
      })
    }

}
