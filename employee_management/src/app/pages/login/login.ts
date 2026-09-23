import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../../core/globalConstants/Global.constant';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  router = inject(Router);

  constructor(private http: HttpClient){

  }

  loginObj: any = {
    userName: '',
    password: '',
  };

  onLogin(){
    // debugger
    this.http.post(environment.API_URL+ "login", this.loginObj).subscribe({
      next:(resp: any)=>{
        if(resp.result){
          // debugger
          alert("User found..")
          localStorage.setItem(GlobalConstant.Local_Login_Key, JSON.stringify(resp.data))
          this.router.navigateByUrl("admin/dashboard");
        }else{
          alert("User not found..")

        }
      },
      error:(err: any)=>{
        // debugger;
        alert("API problem..")
      }
    })
  }
}
