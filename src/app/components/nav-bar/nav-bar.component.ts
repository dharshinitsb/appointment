import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn=false;
  userName!: string | null;
  type!: string | null;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
     this.loggedIn=this.loginService.isLoggedIn();
  }

  logoutuser(){
    this.loginService.logout();
    window.location.href="/login";
       // location.reload();
    }

}
