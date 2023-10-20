import { Component } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: any={};
    constructor(
      public authService : AuthService,
      public router: Router
    ){}

    Login(){
      this.authService.login(this.user).subscribe(next=>{
        console.log("başarılı");
        this.router.navigate([""])
      },err=>{
        console.log(err);
      });
    }
}
