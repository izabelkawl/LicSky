import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
