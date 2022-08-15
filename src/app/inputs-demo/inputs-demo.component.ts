import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs-demo',
  templateUrl: './inputs-demo.component.html',
  styleUrls: ['./inputs-demo.component.scss']
})
export class InputsDemoComponent {
  formGroup: FormGroup;
  firstName: AbstractControl;
  birthday: AbstractControl;
  search: AbstractControl;
  dropdown: AbstractControl;
  checky: AbstractControl;
  radioFun: AbstractControl;
  segControl: AbstractControl;
  toggles: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['Don', [Validators.required]],
      birthday: ['', [Validators.required]],
      search: ['', [Validators.required]],
      dropdown: ['', [Validators.required]],
      checky: ['', [Validators.required]],
      radioFun: ['', [Validators.required]],
      segControl: ['2', [Validators.required]],
      toggles: ['', [Validators.required]],
    });
    this.firstName = this.formGroup.controls['firstName'];
    this.birthday = this.formGroup.controls['birthday'];
    this.search = this.formGroup.controls['search'];
    this.dropdown = this.formGroup.controls['dropdown'];
    this.checky = this.formGroup.controls['checky'];
    this.radioFun = this.formGroup.controls['radioFun'];
    this.segControl = this.formGroup.controls['segControl'];
    this.toggles = this.formGroup.controls['toggles'];


  }

  ngOnInit(): void {
  }

}
