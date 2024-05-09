import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``,
})
export class Grafica1Component {
  //
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public dataset1 = [
    {
      label: 'Ventas',
      data: [[10], [40], [50]],
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
      hoverOffset: 4,
    },
  ];
}
