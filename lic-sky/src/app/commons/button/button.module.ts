import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule, MatTooltipModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
