import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mobileNumber!: number; 
  constructor() { }
  
   public ageFromDateOfBirthday(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'years');
  }

  ngOnInit(): void {
  }
  

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an Email-Id';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  notvalid(){ 
  }
  
  date : any;
  resultPickerModel!: any;
  minDate = new Date(1800,1,1);
  maxDate = new Date(2022,1,18);
  hasError(){

  }
  getError(){

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
