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

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['Don', [Validators.required]],
      birthday: ['', [Validators.required]],
      search: ['', [Validators.required]],
      dropdown: ['', [Validators.required]],
      checky: ['', [Validators.required]],
    });
    this.firstName = this.formGroup.controls['firstName'];
    this.birthday = this.formGroup.controls['birthday'];
    this.search = this.formGroup.controls['search'];
    this.dropdown = this.formGroup.controls['dropdown'];
    this.checky = this.formGroup.controls['checky'];


  }

  ngOnInit(): void {
  }

}
