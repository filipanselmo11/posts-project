import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() textName!: string;
  @Input() textPlaceholder!: string;
  @Input() label!: string;
  @Input() inputName!: string;
  @Input() rows: number = 4;
  value!: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState(isDisabled: boolean): void { }
}
