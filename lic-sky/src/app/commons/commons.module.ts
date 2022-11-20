import { NgModule } from "@angular/core";
import { ButtonModule } from "./button/button.module";
import { InputModule } from "./input/input.module";
import { LinkModule } from "./link/link.module";

@NgModule({
  imports: [ButtonModule, InputModule, LinkModule],
  exports: [ButtonModule, InputModule, LinkModule],
})
export class CommonsModule {}