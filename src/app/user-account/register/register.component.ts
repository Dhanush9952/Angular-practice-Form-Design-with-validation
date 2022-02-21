import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  mobileNumber!: number; 
  form: any;
  constructor() { }
  
   public ageFromDateOfBirthday(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'years');
  }

  ngOnInit(): void {
  }
  

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.nullValidator]);
  password = new FormControl('', [Validators.required, Validators.nullValidator]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an Email-Id';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageForPhone() {
    if (this.phone.hasError('required')) {
      return 'Please Enter Mobile Number';
    }
    return this.phone.hasError('phone') ? 'Not a valid number' : '';
  }
  getErrorMessageForPassword() {
    if (this.password.hasError('required')) {
      return 'Password cannot be Empty!';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  
  notvalid(){ 
  }
  
  date : any;
  resultPickerModel!: any;
  minDate = new Date(1800,1,1);
  maxDate = new Date();
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

  birthDate = 1996;

  getAge(birthDate: Date): number {
    const ageTilNowInMilliseconds = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageTilNowInMilliseconds);
    console.log(birthDate);
    return Math.abs(ageDate.getUTCFullYear() - 1970); // Because computers count the today date from the 1st of January 1970
}



changeTitle(inputElement: { value: number; focus: () => void; }){
  inputElement.value = this.calc;
  inputElement.focus();
}

val!: number;
val2!: number;
calc!: number;
calc2!: number;
yearless = 1900;
ageCalc(){
  if (this.val<1900) {
    return this.yearless;
  } else {
    this.calc = 2022-this.val;
    return this.calc;
  }
}
ageCalc2(){
  if (this.val2<1900) {
    return this.yearless;
  } else {
    this.calc2 = 2022-this.val2;
    return this.calc2;
  }
}


 
}
