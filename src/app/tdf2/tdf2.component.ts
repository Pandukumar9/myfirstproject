import { Component, OnInit } from '@angular/core';
import { Employees } from './employees';

@Component({
  selector: 'app-tdf2',
  templateUrl: './tdf2.component.html',
  styleUrls: ['./tdf2.component.css']
})
export class Tdf2Component implements OnInit {
  staticData2 = new Employees('Pandukumar','Pandu#57');
  constructor() { }

  ngOnInit(): void {
  }
  public mysubmitData;
  onSubmit2(){
    console.log(this.mysubmitData);
  }

}
