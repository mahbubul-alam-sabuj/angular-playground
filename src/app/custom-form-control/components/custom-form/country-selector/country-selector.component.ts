import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
})
export class CountrySelectorComponent implements ControlValueAccessor, OnInit {
  disabled = false;

  selected: string | null = null;

  private onTouched: Function | null = null;

  private onChanged: Function | null = null;

  constructor() {}

  ngOnInit(): void {}

  onCountrySelect(value: string) {
    this.selected = value;
    if (this.onTouched) this.onTouched();
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: Function): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: Function): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
