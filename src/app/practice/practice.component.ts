import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {


  ngOnInit(): void {
  }

  marks:number=70;
mycolor:string="";
constructor(){
  if(this.marks>=80){
      this.mycolor="green";
  }else{
     this.mycolor="red";
  }
}

}
