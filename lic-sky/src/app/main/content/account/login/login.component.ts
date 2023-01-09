import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';
import { IButton } from 'src/app/commons/button/button.models';
import { IInput } from 'src/app/commons/input/input.interfaces';
import { generateButtonsConfig } from 'src/app/shared/utils/utils';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url!: string;

  buttonConfig!: IButton[];

  otherButtonConfig!: IButton[];

  formConfig!: IInput[];

  form!: UntypedFormGroup;

  constructor(private service: LoginService) {}

  ngOnInit(): void {
    this.buttonConfig = generateButtonsConfig(['LOGIN'], 'w-100 mb-2');
    this.otherButtonConfig = generateButtonsConfig(
      ['GOOGLE', 'ALLEGRO', 'FACEBOOK'],
      'w-100 mb-2'
    );
    this.getFrom();

    this.formConfig = Object.keys(this.form.controls).map((key) => {
      return {
        formControlName: key,
        label: key,
        color: 'primary',
      };
    });
  }

  getFrom(): void {
    const { required } = Validators;
    this.form = new UntypedFormGroup({
      login: new UntypedFormControl(null, [required]),
      password: new UntypedFormControl(null, [required]),
    });
  }

  onClickLogin(): void {
    const { login, password } = this.form.value;
    this.service
      .logIn(login, password)
      .pipe(
        tap((response) => {
          if (response) {
            alert('Logged');
          } else {
            alert('not Logged');
          }
        })
      )
      .subscribe();
  }

  getHeader(): string {
    return 'Zaloguj się za pomocą adresu e-mail';
  }
}
