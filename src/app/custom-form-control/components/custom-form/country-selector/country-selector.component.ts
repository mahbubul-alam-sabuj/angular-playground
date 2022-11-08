import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Country } from 'src/app/shared/types/country.interface';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountrySelectorComponent),
  multi: true,
};
@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
})
export class CountrySelectorComponent implements ControlValueAccessor, OnInit {
  countries: Country[] = [
    { code: 'BN', name: 'Bangladesh' },
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'NL', name: 'Netherlands' },
  ];

  disabled = false;

  selected: string | null = null;

  private onTouched: Function | null = null;

  private onChange: Function | null = null;

  constructor() {}

  ngOnInit(): void {}

  onCountrySelect(value: string) {
    this.selected = value;
    if (this.onTouched) this.onTouched();
    if (this.onChange) this.onChange(value);
  }

  writeValue(value: string): void {
    this.selected = value ?? '';
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
