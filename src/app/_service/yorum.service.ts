import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Yorum } from '../_Modals/Yorum';

@Injectable({
  providedIn: 'root'
})
export class YorumService {

  constructor(public http: HttpClient) { }

  getYorumByBlog(id:number):Observable<Yorum[]>{
    return this.http.get<Yorum[]>("https://localhost:7180/api/Yorum/GetAllBlogId/"+id).pipe(
      map((response:any)=>{
        return response.data;
      })
    )
  }
}
