import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  xyz: number =  88834683; 
  abc: string = "";
  ppt:string = "property binding";

  title: string ="";
  constructor() { }

  ngOnInit(): void { 
  }
  
  onSubmit(){
    alert("hello event binding");
    console.log("pandu, arun,teju, bhargavi");
    this.abc = "anil"; 
  }

}
