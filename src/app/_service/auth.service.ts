import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  decodedToken:any;

  jwtHelper = new JwtHelperService();
  constructor(public http: HttpClient) { }

  login(model : any){
    return this.http.post("https://localhost:7180/api/Auth/Login/",model).pipe(
    map((response:any)=>{
      const result = response;
      localStorage.setItem("token",result.token);
      this.decodedToken = this.jwtHelper.decodeToken(result.token);
      console.log(this.decodedToken);
    })
    )
  }


  register(model:any){
    return this.http.post("https://localhost:7180/api/Auth/Register/",model);
  }


  loggedIn(){
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
