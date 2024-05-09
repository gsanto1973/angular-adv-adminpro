import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  //
  @Input()
  title: string = 'Sin título';

  @Input('labels')
  labels: string[] = ['Label1', 'Label2', 'Label3'];

  @Input()
  datasets = [
    {
      label: 'Sin label',
      data: [[100], [200], [300]],
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
      hoverOffset: 4,
    },
  ];

  public doughnutChartType: ChartType = 'doughnut';
}
