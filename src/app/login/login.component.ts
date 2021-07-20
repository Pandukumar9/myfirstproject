import { Component, OnInit } from '@angular/core';
class UserModel{
  useremail:string="";
  userconfirmemail:string;
  password:string ;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
