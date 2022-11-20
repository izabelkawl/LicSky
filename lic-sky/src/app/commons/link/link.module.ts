import { RouterModule } from '@angular/router';
import { LinkComponent } from './link.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LinkComponent],
  exports: [LinkComponent],
  imports: [CommonModule, RouterModule]
})
export class LinkModule {}