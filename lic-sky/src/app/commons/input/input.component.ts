import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IInput } from './input.interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() form!: UntypedFormGroup;
  @Input() formConfig!: IInput[];

  ngOnInit(): void {
  }
}
