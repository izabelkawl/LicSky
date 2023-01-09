import { NgModule } from '@angular/core';
import { HomeModule } from './content/home/home.module';
import { LoginModule } from './content/account/login/login.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavBarModule } from './navbar/navbar.module';
import { PasswordReminderComponent } from './content/account/password-reminder/password-reminder.component';
import { RegisterModule } from './content/account/register/register.module';

@NgModule({
  declarations: [MainComponent, PasswordReminderComponent],
  imports: [
    MainRoutingModule,
    LoginModule,
    HomeModule,
    NavBarModule,
    RegisterModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
