export interface IButton {
  id?: number | string;
  name: string;
  type?: string;
  color?: string;
  tooltip?: string;
  routerLink?: string;
  matType?: Types;
  className?: string;
}
export declare type Types =
  | 'mat-raised-button'
  | 'mat-button'
  | 'mat-flat-button'
  | undefined;

export enum Colors {
  GOOGLE = 'warn',
  ALLEGRO = 'accent',
}

export enum Routes {
  SEND = '/register',
}