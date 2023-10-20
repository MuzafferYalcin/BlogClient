import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../_Modals/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http : HttpClient) { }

  getCategory(): Observable<Category[]>
  {
    return this.http.get<Category[]>("https://localhost:7180/api/Category/GetCategories").pipe(
      map((response:any)=>{
          return response.data;
      })
    );
  }
}
