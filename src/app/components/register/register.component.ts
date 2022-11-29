import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/model/must-match.validator';
import { Users } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  us: Users = new Users();
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private loginService:LoginService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          patientName: ['', Validators.required],
          emailId: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          address: ['', Validators.required],
          contactNumber: ['', Validators.required]
      }, {
         // validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.us.username = this.registerForm.value.username;
      this.us.password = this.registerForm.value.password;
      this.us.patientName = this.registerForm.value.patientName;
      this.us.contactNumber = this.registerForm.value.contactNumber;
      this.us.emailId = this.registerForm.value.emailId;
      this.us.address = this.registerForm.value.address;
      this.loginService.registserUser(this.us).subscribe((dt)=>{
            window.location.href="/login";
      })
      window.location.href="/login";
     
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
