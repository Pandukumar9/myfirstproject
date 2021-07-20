import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private _router:Router,private _activatedRoute:ActivatedRoute) { }
  public selectedid;
  public course = [
    {'id':1,'name':'html'},
    {'id':2,'name':'Css'},
    {'id':3,'name':'Bootstrap'},
    {'id':4,'name':'angular'}
  ];
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    let id = parseInt(params.get('id'));
    this.selectedid= id;
  });
  }
  onSelected(x){
  this._router.navigate(['/course',x.id])
  }
  isSelected(x){
    return x.id === this.selectedid.id;
  }
}
