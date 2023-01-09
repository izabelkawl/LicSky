import { RegisterComponent } from './register.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from 'src/app/commons/commons.module';

@NgModule({
  declarations:[RegisterComponent],
  imports: [BrowserModule, CommonsModule],
  exports: []
})
export class RegisterModule {}