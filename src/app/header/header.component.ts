import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus:any[] = [
    {
      label:'Home',
      url:'/home'
    },
    {
      label:'About',
      url:'/about'
    }, 
    {
      label:'Projects',
      url:'/projects'
    },
    {
      label:'Employees',
      url:'/employees'
    }, 
    {
      label:'Contact',
      url:'/contact'
    },
    {
      label:'Account',
      url:'/account'
    }
  ];
  toggle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  menuToggle():void{
    this.toggle = !this.toggle;
  }

}
