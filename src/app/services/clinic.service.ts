import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  url="http://localhost:8092"
  constructor(private http:HttpClient) { }

  getClinicDetails(){
    return this.http.get<any>(`${this.url}/getAllClinicDetails`);
  }

}
