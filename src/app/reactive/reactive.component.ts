import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(private _myFB : FormBuilder) { }

  // registrationForm = new FormGroup({
  //   username: new FormControl('PANDU'),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // });
  get Username(){
    return this.registrationForm.get('username')
  }
  registrationForm= this._myFB.group({
    username: ['',Validators.required],
    password: [''],
    address :this._myFB.group({
      city: [''],
      state: ['']
    })
  });
  ngOnInit(): void {
  }
  selectedValues(){
    this.registrationForm.patchValue({  //instead of setValue we can use patchValue
      username: 'Pandkumar',
      
      address: {
        city: 'warangal',
        state: 'Telangana'
    }
  })
  }

  onSubmited(registrationForm){
    console.log(registrationForm);
  }
}
