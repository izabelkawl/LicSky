import { Component, Input, OnInit, Type } from '@angular/core';
import { types } from './button.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements OnInit {
  @Input() name!: string;
  @Input() routerLink!: string;
  @Input() color!: string;
  @Input() tooltip!: string;
  
  @Input()
  type: types = "mat-raised-button";

  ngOnInit(): void {}
}
