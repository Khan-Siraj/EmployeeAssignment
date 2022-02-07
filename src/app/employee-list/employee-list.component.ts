import { Component, OnInit } from '@angular/core';
import Employee from './employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Employee[] = [
    {
      EmployeeID:1,
      FirstName:'Siraj',
      LastName:'Khan',
      Salary:50000,
      DOB:new Date("1999-6-21"),
      Email:'sirajk78620@gmail.com',
      Action:false
    },
    {
      EmployeeID:2,
      FirstName:'Google',
      LastName:'Ai',
      Salary:30000,
      DOB:new Date("2016-5-16"),
      Email:'google@gmail.com',
      Action:false
    },
    {
      EmployeeID:3,
      FirstName:'Alexa',
      LastName:'Amazon',
      Salary:35000,
      DOB:new Date("2014-11-6"),
      Email:'alexa@gmail.com',
      Action:false
    },
    {
      EmployeeID:4,
      FirstName:'Siri',
      LastName:'Apple',
      Salary:38000,
      DOB:new Date("2014-10-4"),
      Email:'siri@gmail.com',
      Action:false
    },
    {
      EmployeeID:5,
      FirstName:'Cortana',
      LastName:'Microsoft',
      Salary:25000,
      DOB:new Date("2014-4-2"),
      Email:'cortana@gmail.com',
      Action:false
    },
  ]
  currentIndex:any;
  showEdit:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  EditEmp():void {
    this.showEdit=true;
  }

  UpdateEmp():void{
    this.showEdit=false;
  }

}
