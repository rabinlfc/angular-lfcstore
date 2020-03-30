import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "src/app/HelloComponent";

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class HelloModule {}