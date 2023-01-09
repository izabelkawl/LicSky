import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/commons/button/button.module';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LoginPipe } from 'src/app/shared/pipes/login/login.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, LoginPipe],
  imports: [ButtonModule, MatIconModule, MatButtonModule, CommonModule, RouterModule],
  exports: [NavbarComponent],
  providers: [NavbarService],
})
export class NavBarModule {}
