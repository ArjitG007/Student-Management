import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { StudentModel } from './student-model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  // myserviceService: any;

  myform!: FormGroup;
  studentModelObj: StudentModel = new StudentModel();

  // All data gets stored from get call here.. i.e. studentData
  studentData : any;

  showAdd !: boolean;
  showUpdate!: boolean;

  constructor(private fb: FormBuilder, private myserviceService: MyserviceService) { }

  ngOnInit(): void {

    this.myform = this.fb.group(
      {
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        email: new FormControl('')
      }
    )

    this.getallstudent();
  }

  // logout()
  // {

  // }

  // Adding new data
  postdetails() {
    this.studentModelObj.firstname = this.myform.value.firstname;
    this.studentModelObj.lastname = this.myform.value.lastname;
    this.studentModelObj.email = this.myform.value.email

    this.myserviceService.postStudent(this.studentModelObj).subscribe((data: any) => {
      console.log(data);
      alert("Student Added")

      // click cancel button

      let press = document.getElementById('close');
      press?.click();

      // for reseting the form after clicking it

      this.myform.reset();

      // calling getallstudent() so that when we add a data, it gets displayed in the Student List

      this.getallstudent();

      // this.showAdd = true;
      // this.showUpdate = false;

    },
      // Error Message
      (error: any) => {
        alert("Something Went Wrong")
      })
  }

  // Displaying Data From json-server
  getallstudent() {
    this.myserviceService.showStudent().subscribe(data => {
      this.studentData = data
    })
  }

  //  Deleting a Particular Data
  deletestudent(i: any) {
    this.myserviceService.deleteStudent(i.id).subscribe(data => {
      alert("Employee Deleted");

      // for refreshing the page
      this.getallstudent();
    })
  }

  // For Updating/Showing the data on the edit Modal
  onEdit(i: any) {

    this.showAdd = false;
    this.showUpdate = true;


    this.studentModelObj.id = i.id
    this.myform.controls['firstname'].setValue(i.firstname);
    this.myform.controls['lastname'].setValue(i.lastname);
    this.myform.controls['email'].setValue(i.email)

  }
  // For Updating the data
  updatestudent() {
    this.studentModelObj.firstname = this.myform.value.firstname;
    this.studentModelObj.lastname = this.myform.value.lastname;
    this.studentModelObj.email = this.myform.value.email

    this.myserviceService.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe((data: any) => {
      console.log(data);
      alert("Student Updated")

      // click cancel button

      let press = document.getElementById('close');
      press?.click();

      // for reseting the form after clicking it

      this.myform.reset();

      // calling getallstudent() so that when we add a data, it gets displayed in the Student List

      this.getallstudent();


    },
      // Error Message
      (error: any) => {
        alert("Something Went Wrong")
      })
  }

  clickAddEmploy()
  {
    this.myform.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

}
