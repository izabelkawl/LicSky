import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IInput } from 'src/app/commons/input/input.interfaces';
import { IButton } from 'src/app/commons/button/button.models';
import { generateButtonsConfig } from 'src/app/shared/utils/utils';

const { required } = Validators;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formConfig!: IInput[] 

  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(null, [required]),
    login: new UntypedFormControl(null, [required]),
    firstName: new UntypedFormControl(null, [required]),
    lastName: new UntypedFormControl(null, [required]),
    phone: new UntypedFormControl(null, [required]),
    password: new UntypedFormControl(null, [required]),
  });
  
  buttonConfig: IButton[] = generateButtonsConfig(['LOGIN'], 'w-100 mb-2');

  constructor() {}

  ngOnInit(): void {
    this.formConfig = Object.keys(this.form.controls).map((key) => {
      return {
        formControlName: key,
        label: key,
        color: 'primary',
      };
    });
  }
  
  getHeader(): string {
    return 'Zaloguj się za pomocą adresu e-mail';
  }
}
