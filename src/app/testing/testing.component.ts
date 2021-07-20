import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }
  isCheck:boolean;
  jack:string="enter your name";
  name:string= "hod";
  required:boolean=true;
  required1:boolean=false;

  public  Group = {
    "TextSize" :  this.required,
    "TextStyle" :  this.required,
    "TextColor" :  this.required
  }

  styebind:string="blue";
  public Group1 = {
    color : "gold",
    fontSize : "40px",
    fontFamily: "verdana"
  }

  inter:string="im interpolation";

  data1:string="";
  ngOnInit(): void {
  }
  onSelecting(){
    alert("hellllo");
  }
}
