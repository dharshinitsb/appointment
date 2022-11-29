import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/model/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clinicService:ClinicService, private router:Router) { }

  list:Clinic[]=[];

  ngOnInit(): void {
    this.clinicService.getClinicDetails().subscribe((dt)=>{
      this.list=dt;
    })
  }

  clinic(){
    this.router.navigate(["/appointment"]);
  }

}
