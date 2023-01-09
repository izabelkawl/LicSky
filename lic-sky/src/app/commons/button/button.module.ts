import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
