import { Component } from '@angular/core';

  class UserModel{
    useremail:string="";
    userconfirmemail:string;
    password:string ;
    phone:number;
    city:string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questionbank';
  UserData :UserModel[]=[];
  UserItem:UserModel=new UserModel();

  userconfirmemail:string;
  copyemial:string="";
  OnCopy(){
    this.copyemial="hello im angular";
   }

  OnEmailCheck(email:string,confirmemail:string)
  {
    if(email==confirmemail){
      alert('email are matched')
    }else{
      alert('email are not matched')
    }
     
  }
  OnAdd(){
    this.UserItem=new UserModel();
    this.UserData.push(this.UserItem);
  }
  ischeck:boolean;

  dsiBtn(email:string,confirmemail:string){

    if(email != "" && confirmemail != ""){
    this.ischeck = true;
    }
}

data2:string="";
}