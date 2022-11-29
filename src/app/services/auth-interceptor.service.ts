import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginService:LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    let newReq = req;
    let authToken = this.loginService.getToken();
    console.log("Intercepter", authToken);
    if(authToken!=null)
    {
        newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${authToken}`}});
        
    }
    //console.log(newReq.headers);
    return next.handle(newReq);
}
  
}
