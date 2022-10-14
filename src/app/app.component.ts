import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('firstInputBox') firstInputBox: ElementRef;
  @ViewChild('secondInputBox') secondInputBox: ElementRef;
  constructor(private fb: FormBuilder, private customValidator: ValidationService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.firstInputBox.nativeElement && e.target !== this.secondInputBox.nativeElement) {
        this.showValidaton1 = false;
        this.showValidaton2 = false;
      }
    });
  }

  resetForm: FormGroup;
  title = 'mes-solution';
  showValidaton1 = false;
  showValidaton2 = false;
  ngOnInit(): void {
    this.resetForm = this.fb.group({
      firstPassword: [null, [Validators.required, Validators.maxLength(9),Validators.minLength(20), this.customValidator.specialCharacter, this.customValidator.upperCase, this.customValidator.lowerCase, this.customValidator.oneNumber]],
      secondPassword: [null, [Validators.required, Validators.maxLength(9),Validators.minLength(20), this.customValidator.specialCharacter, this.customValidator.upperCase, this.customValidator.lowerCase, this.customValidator.oneNumber]],
      question: ['', [Validators.required]],
      answer: [null, [Validators.required]],
    })
  }
  openCheckBoxModal1(event: any): void {
    this.showValidaton1 = true;
    this.showValidaton2 = false;
  }
  openCheckBoxModal2(event: any): void {
    this.showValidaton2 = true;
    this.showValidaton1 = false;
  }
  get f(): any { return this.resetForm.controls; }

  formValue() {
    console.log("form value", this.resetForm.value);
  }
}
