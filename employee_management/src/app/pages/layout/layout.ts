import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { GlobalConstant } from '../../core/globalConstants/Global.constant';
import { IUser } from '../../core/model/interfaces/User.model';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {

  loggedUserData!: IUser;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.Local_Login_Key)

    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLoggOf(){
    localStorage.removeItem(GlobalConstant.Local_Login_Key);
    this.router.navigate(['/login']);   
  }
}
