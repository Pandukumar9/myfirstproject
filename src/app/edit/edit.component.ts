import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 isred:boolean=true;
 isread:boolean=true;
  constructor() { }
   abc: string = "";
  ngOnInit(): void {
  }

  onmouseover(){
    this.isred = true;
  }
  onmouseout(){
    this.isred = false;
    alert("wel come to angular");
  }
}
