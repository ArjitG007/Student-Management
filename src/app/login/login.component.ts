import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private http:HttpClient, private router:Router) { }

  loginform !: FormGroup;

  ngOnInit(): void {

    this.loginform = this.fb.group(
      {
        email: new FormControl(''),
        password: new FormControl('')
      }
    )
  }

  login()
  {
    this.http.get<any>('http://localhost:3000/SignupUsers')
    .subscribe(data =>
      {
        const check = data.find((res: any) =>
          {
            return res.email === this.loginform.value.email && res.password == this.loginform.value.password
          })

          if(check)
          {
            alert("Login Successful");
            this.router.navigate(['dashboard'])
            this.loginform.reset();
          }
          else
          {
            alert("User Not Found");
          }
      },
      error =>
      {
        alert("Something Went Wrong");
      })
  }

}

// this.router.navigate(['dashboard'])