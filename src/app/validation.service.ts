import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  // specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

  // atLeaseOneSpecialChar(): ValidatorFn {
  //   console.log("first")
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     if (!control.value) {
  //       return null;
  //     }

  //     const regexObj = new RegExp(this.specialCharacter);
  //     console.log(regexObj)
  //     const valid = regexObj.test(control.value);
  //     return valid ? null : { specialCharacterTrue: true };
  //   };
  // }
  specialCharacter(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }
  }

  upperCase(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /(?=.*[A-Z])/;
    if (control.value && nameRegexp.test(control.value)) {
      return { upperCase: true };
    }
  }

  lowerCase(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /(?=.*[a-z])/;
    if (control.value && nameRegexp.test(control.value)) {
      return { lowerCase: true };
    }
  }

  oneNumber(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[0-9]+/g
    if (control.value && nameRegexp.test(control.value)) {
      return { oneNumber: true };
    }
  }
}
