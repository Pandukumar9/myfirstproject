import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
   name:string ="arunkumarpandu";
   msg:string = " title case with pipes";
   persons:any[]=[{
    "fname": "pandu",
    "lname": "gujja"
  }];
   date = new Date();
  onSelect(){
 
  }
}
