import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

  constructor() { }

  vinay: boolean = true;
  //property binding 
    ppt:string = "enter name";
//class binding
abc:string  = "textsize";
required1:boolean=true;
// name: any[]=[];
 mystyles: any[] = [{
  "TextSize" :  this.required1,
  "TextStyle" :  this.required1,
  "TextColor" :  this.required1
}]
 //sTYLE binding
  public mycolor ="pink";
  required:boolean =false;

  public mystyles1= {
    color: "skyblue",
    fontStyle: "italic",
    fontWeight: "bold"
  }
  
//Interpolation
  public xyz = "this is Interpolation";
//TWO WAY DATA binding
  data:string="";


  ngOnInit() { 
  }
      //event binding
  name1:string ="";
  onClick() {
    alert("this is alert");
    console.log("this is console");
     this.name1 = "pandu";
    //  console.log(this.data);
  }
  // toggleMe(){
  //  this.vinay = !this.vinay;
  // }

}
