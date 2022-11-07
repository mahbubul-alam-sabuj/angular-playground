import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CountrySelectorComponent } from './components/custom-form/country-selector/country-selector.component';

const routes: Routes = [
  { path: 'custom-form', component: CustomFormComponent },
];

@NgModule({
  declarations: [CustomFormComponent, CountrySelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CustomFormControlModule {}
