import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  data:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(res=>{
      this.data=res;
    })
  }

}
