import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncapsulationComponent } from './encapsulation.component';

@NgModule({
  declarations: [EncapsulationComponent],
  imports: [
    CommonModule
  ],
  exports: [EncapsulationComponent]
})
export class EncapsulationModule { }
