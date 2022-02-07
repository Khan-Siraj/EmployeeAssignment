import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus:string[] = ['Home','About', 'Projects', 'Contact',"Account"];
  toggle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  menuToggle():void{
    this.toggle = !this.toggle;
  }

}
