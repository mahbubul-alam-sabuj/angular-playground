import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CountrySelectorComponent } from './components/custom-form/country-selector/country-selector.component';
import { EmailComponent } from './components/custom-form/email/email.component';

const routes: Routes = [
  { path: 'custom-form', component: CustomFormComponent },
];

@NgModule({
  declarations: [CustomFormComponent, CountrySelectorComponent, EmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
  ],
})
export class CustomFormControlModule {}
