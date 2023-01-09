import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { IButton } from './button.models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterViewInit {
  @ViewChildren('button', { read: ElementRef })
  button!: QueryList<ElementRef>;

  @Input() buttonsConfig!: IButton[];

  constructor(private r: Renderer2) {}

  ngAfterViewInit(): void {
    this.button.forEach((item: ElementRef) => {
      this.r.setStyle(item.nativeElement, 'background-color', '#f2f2f2');
    });
  }
}
