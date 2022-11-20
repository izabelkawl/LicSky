import { NgModule } from '@angular/core';
import { ButtonModule } from '../commons/button/button.module';
import { HomeModule } from './content/home/home.module';
import { LoginModule } from './content/login/login.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavBarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [MainRoutingModule, LoginModule, HomeModule, NavBarModule],
  exports: [MainComponent],
})
export class MainModule {}
