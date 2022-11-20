// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { tap } from 'rxjs';
import { IButton } from 'src/app/commons/button/button.models';
import { IInput } from 'src/app/commons/input/input.interfaces';
import { generateButtonsConfig } from 'src/app/shared/utils/utils';

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

  constructor(
    private router: ActivatedRoute,
    // private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    // const sdsdf = this.httpClient.get('http://localhost:8080/hello', {
    //   responseType: 'text',
    // });
    // sdsdf.subscribe((val) => {
    //   console.log(val);
    // });
    this.buttonConfig = generateButtonsConfig(['SEND'], 'w-100 mb-2');
    this.otherButtonConfig = generateButtonsConfig([
      'GOOGLE',
      'ALLEGRO',
      'FACEBOOK',
    ], 'w-100 mb-2');

    this.router.url
      .pipe(
        tap((value: UrlSegment[]) => {
          this.url = value[0].path;
          this.getFrom();

          this.formConfig = Object.keys(this.form.controls).map((key) => {
            return {
              formControlName: key,
              label: key,
              color: 'accent',
            };
          });
        })
      )
      .subscribe();
  }

  getFrom(): void {
    if (this.isLogin()) {
      this.form = new UntypedFormGroup({
        login: new UntypedFormControl(null, [Validators.required]),
        password: new UntypedFormControl(null, [Validators.required]),
      });
    } else {
      this.form = new UntypedFormGroup({
        email: new UntypedFormControl(null, [Validators.required]),
        login: new UntypedFormControl(null, [Validators.required]),
        firstName: new UntypedFormControl(null, [Validators.required]),
        lastName: new UntypedFormControl(null, [Validators.required]),
        phone: new UntypedFormControl(null, [Validators.required]),
        password: new UntypedFormControl(null, [Validators.required]),
      });
    }
  }

  isLogin(): boolean {
    return this.url === 'login';
  }

  getHeader(): string {
    return this.isLogin()
      ? 'Zaloguj się za pomocą adresu e-mail'
      : 'Utwórz konto';
  }
}
