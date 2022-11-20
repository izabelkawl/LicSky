import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule, MatTooltipModule, RouterModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
