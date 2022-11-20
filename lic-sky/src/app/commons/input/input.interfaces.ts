import { ThemePalette } from "@angular/material/core";

export interface IInput {
  formControlName: string;
  label: string;
  color?: ThemePalette;
}