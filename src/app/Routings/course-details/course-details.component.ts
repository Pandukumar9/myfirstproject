import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _route:Router) { }
  public courseid;
  ngOnInit(){
    // let cid = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    // this.courseid = cid;
    this._activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    let id = parseInt(params.get('id'));
    this.courseid= id;
  });
  }

  toPrevous(){
    let previousid = this.courseid-1;
    // this._route.navigate(['/course',previousid])
     this._route.navigate(['../',previousid],{relativeTo: this._activatedRoute});
  }
  toNext(){
    let nextid = this.courseid+1;
    // this._route.navigate(['/course-',nextid])
    this._route.navigate(['../',nextid],{relativeTo:this._activatedRoute});
  }
  toBack(){
    let selectedid=this.courseid;
    // this._route.navigate(['/course',{id:selectedid}]);
    this._route.navigate(['../',{id:selectedid}],{relativeTo:this._activatedRoute});
  }

  showDuration(){
    this._route.navigate(['duration'],{relativeTo:this._activatedRoute});
  }
  showFee(){
    this._route.navigate(['fee'],{relativeTo:this._activatedRoute});
  }

}
