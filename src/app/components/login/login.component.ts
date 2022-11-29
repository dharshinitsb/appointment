import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
      private router:Router
  ) { }

  msg!:string;
  tkn = false;
  credentials={
    username:'',
    password:''
  }
  loggedIn:any;
  submitted = false;
  errorMessage: string = '';

  ngOnInit(): void { }

  onSubmit(){
    console.log("Form is submitted");
    this.submitted=true; 
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("We have to submit the form");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any) =>{
          window.location.href="/home";
          console.log(response);
          this.loginService.loginUser(response);
          this.loggedIn=this.loginService.isLoggedIn();
        },
        (error: any) => {
          this.msg="Invalid Credentials";
      })
      
     
    }
    else{
      this.msg="Fields are empty!!!";
      console.log("Fields are empty!!!");
    }
  }

  registerPage()
  {
    this.submitted=true;
    this.router.navigate(['/register']);
  }

}
