import { Component, OnInit } from '@angular/core';

export class ExamModel{
  Id:number | undefined;
  ExamName:string | undefined;
}
export class QuestionModel{
  Id:number | undefined;
  QuestionName:string | undefined;
  ExamId:number | undefined;
}
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  ExamData: ExamModel= new ExamModel();
  QuestionData: QuestionModel =new QuestionModel();
  constructor() { }
  public abcd="";

  ngOnInit(): void {
    this.ExamData.Id=1,
    this.ExamData.ExamName='Angular11';
     this.QuestionData.Id=1;
     this.QuestionData.QuestionName ='how many times use the phone?'
  }
  onSelect(){
    document.getElementById("demo").innerHTML = "1.What kind of technologies comes under the UI technologies?";
    this.abcd = "textColor"
  }
  onSelect1(){
    document.getElementById("demo").innerHTML = "2.what is databindings and explain it?";
  }

  onSelect2(){

    document.getElementById("demo").innerHTML="3.what is html?";
  }
  onSelect3(){
    document.getElementById("demo").innerHTML="4.what webapi?";
  }
  onSelect4(){
    document.getElementById("demo").innerHTML="5.what webapi?";
  }
}
