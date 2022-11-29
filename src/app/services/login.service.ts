import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Users } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8091"
  constructor(private http:HttpClient) { }

  generateToken(credentials:any)
  {
   return this.http.post(`${this.url}/login`,credentials,{responseType:"text"})
  }

 
  loginUser(token: string){
    console.log("token");
    localStorage.setItem("token",token);
    return true;
  }
 //to check that user is logged in or not
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  registserUser(user: Users): Observable<any>{
    return this.http.post<any>(`${this.url}/registerPatientDetails`, user);
  }
  
}
