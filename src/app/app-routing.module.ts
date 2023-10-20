import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WriteblogComponent } from './writeblog/writeblog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [

  { path : "" , component : BlogListComponent},
  { path : "login" , component : LoginComponent},
  { path : "register" , component : RegisterComponent},
  { path : "blog-details/:id" , component : BlogDetailsComponent},
  { path : "writeblog" , component : WriteblogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
