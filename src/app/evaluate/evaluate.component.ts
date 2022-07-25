import { Component, OnInit } from '@angular/core';
import { evaluate } from 'mathjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
  expression: string = "";

  a: string = "";


  // evaluate() {
  //   // console.log(this.expression);
  //   this.a = eval(this.expression);

  //   if (this.a != "") {
  //     alert("Valid Expression");
  //   }
  //   else {
  //     // throw new Error('Method not implemented.');
  //     alert("Invalid");
  //   }

  // }

  isValid() {
    try {

      if (this.expression === "") {
        alert("Invalid Expression");
      }
      else {
        this.a = eval(this.expression);
        alert("Valid Expression");
        this.expression = "";
      }

    } catch (error) {
      alert("Invalid Expression");
      this.expression = "";
    }

  }
}
