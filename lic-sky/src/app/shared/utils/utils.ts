
import { Colors, IButton, Routes } from 'src/app/commons/button/button.models';

export function generateButtonsConfig(
  keys: string[],
  className?: string
): IButton[] {
  return Object.values(keys).map((key: string) => {
    return {
      id: key,
      name: key,
      tooltip: key,
      className,
      color: (Colors as any)[key] ?? 'primary',
      matType: 'mat-button',
      routerLink: (Routes as any)[key] ?? `/${key.toLowerCase()}`,
    };
  });
}
