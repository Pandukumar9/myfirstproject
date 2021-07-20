import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  get firstName(){
    return this.contactusData.get('firstName');
  }
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }
  contactusData = this.fb.group({
    firstName : ['pandu',[Validators.required,Validators.maxLength(5)]],
    lastname : [''],
    email : [''],
    phone : ['']
  });
  LoadApiData(){
    this.contactusData.patchValue({   //setValue() for only display all the data and must follow above sequence.
      firstName: 'Pandu',                 //patchValue() for only required fields data u want to set.then we can use
      lastname: 'Kumar',
      email: 'pandukumar.gujja@gnail.com',
      phone: '7989045247'
    })
  }

  onSubmit(){
    console.log(this.contactusData.value);
  }
}
