import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class InputModule {}
