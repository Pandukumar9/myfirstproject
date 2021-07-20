import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees: any[]=[];
  public errMsg;
  public employees =[];
  constructor(private _empService:EmployeeService) { }

  ngOnInit() {
       this._empService.getEmployees()
       .subscribe(data => this.employees = data,
                  error => this.errMsg = error);
  }

}
