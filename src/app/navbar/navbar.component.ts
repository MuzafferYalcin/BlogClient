import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_service/category.service';
import { Category } from '../_Modals/Category';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[]= [];

  constructor(
    private categoryService : CategoryService,
    public authService : AuthService,
    private router : Router
    ){}
  ngOnInit(): void {
  }

  getCategory()
    {
      this.categoryService.getCategory().subscribe(next=>
        {
          this.categories = next;
          console.log(this.categories);
        },err=>
        {
          console.log(err.error);
        }
      );
    }
    loggedIn(){
      return this.authService.loggedIn();
    }

    logout(){
      localStorage.clear();
    }
}
