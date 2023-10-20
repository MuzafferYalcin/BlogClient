import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_Modals/Blog';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http : HttpClient) { }


  getBlogs():Observable<Blog[]>
  {
    return this.http.get<Blog[]>("https://localhost:7180/api/Blog/GetBlogs").pipe(
      map((response:any) =>{
        return response.data;
      })
    )
  }

  getBlog(id: number): Observable<Blog>
  {
    return this.http.get<Blog>("https://localhost:7180/api/Blog/GetBlog/"+id).pipe(
      map((response:any)=>{
        return response.data;
      })
    )
  }

  addBlog(blog : Blog)
  {
    return this.http.post("https://localhost:7180/api/Blog/PostBlog",blog);
  }

}
