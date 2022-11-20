import { Component } from '@angular/core';
import { generateButtonsConfig } from 'src/app/shared/utils/utils';
import { NavbarButtons } from './navbar.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = 'Lic-Sky';
  buttonsKeys: NavbarButtons[] = ['HOME', 'LOGIN', 'BASKET'];
  buttons = generateButtonsConfig(this.buttonsKeys, 'ms-5');
  logged = false;
}
