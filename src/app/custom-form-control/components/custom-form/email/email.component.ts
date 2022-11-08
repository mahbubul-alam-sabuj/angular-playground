import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const EMAIL_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmailComponent),
  multi: true,
};

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [EMAIL_CONTROL_VALUE_ACCESSOR],
})
export class EmailComponent implements ControlValueAccessor, OnInit {
  email: string = '';

  isDisabled = false;

  private onChange: Function | null = null;

  private onTouched: Function | null = null;

  constructor() {}

  ngOnInit(): void {}

  handleEmailChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.email = value;
    if (this.onChange) this.onChange(this.email);
    if (this.onTouched) this.onTouched();
  }

  writeValue(value: string): void {
    this.email = value ?? '';
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
