import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform !: FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.signupform = this.formBuilder.group(
    {
      name : new FormControl(''),
      number: new FormControl(''),
      email: new FormControl(''),
      password:new FormControl('')
    }
    )
  }

  signup()
  {
     this.http.post('http://localhost:3000/SignupUsers',this.signupform.value)
     .subscribe(data =>
      {
        alert('SignUp Successfull');
        this.signupform.reset();
        // console.log(data);
        this.router.navigate(['login']);
      },
      error =>
      {
        alert("Something Went Wrong")
      })

  }

}
