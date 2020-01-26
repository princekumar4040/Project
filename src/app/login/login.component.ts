import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Form,  FormBuilder, Validators, FormGroup} from '@angular/forms' 
import { auth } from 'firebase';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myGroup:FormGroup;
  url:string='http://localhost:8080/login'

  constructor(public route: Router, private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit() {
this.myGroup= this.fb.group({

email:["", [Validators.required, Validators.email]],
password:["",[Validators.required, Validators.maxLength(10)]]
}
)
  }




  login() {
    // localStorage.setItem('token', '1234');
      console.log(this.myGroup.controls.email.value)
      console.log(this.myGroup.controls.password.value)
    this.http.post(this.url, this.myGroup.value).subscribe( res=>{

      this.route.navigate(['dashboard']);
       console.log(res)
    } )

  }

}
