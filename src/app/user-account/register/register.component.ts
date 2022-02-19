import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mobileNumber!: number; 
  constructor() { }

  ngOnInit(): void {
  }
  

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  notvalid(){ 
  }
  
  date : any;
  resultPickerModel!: any;
  minDate = new Date(1600,1,1);
  maxDate = new Date(2022,1,18);
  hasError(){

  }
  getError(){

  }

}
