import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomFormControlModule } from './custom-form-control/custom-form-control.module';
import { ThemeService } from './shared/services/theme.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CustomFormControlModule],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
