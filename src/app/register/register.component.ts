import { Component } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  modal:any={}

  constructor(private authService : AuthService){}
  ngOnInit(): void {

  }




  register(){
    this.authService.register(this.modal).subscribe(next=>{
      console.log("kullanici oluşturuldu");
    },err=>{
      console.log(err.error);
    });
  }
}
