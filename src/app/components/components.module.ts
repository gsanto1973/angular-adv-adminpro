import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [DonaComponent, IncrementadorComponent],
  exports: [DonaComponent, IncrementadorComponent],
  imports: [BaseChartDirective, CommonModule, FormsModule],
})
export class ComponentsModule {}
