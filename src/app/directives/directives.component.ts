import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  constructor() { }
  
//If conditions
  required:boolean = true;
  xyz:boolean = true;
  abcd:boolean = true;
//For conditions
  norm : string = "hello"; 
  subjects: any[] = ["c#", "java", "core java", "phython", "html"];
//switch conditions
  color:string= "red";

  ngOnInit(): void {
  }

}
