import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartAnimationOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartOptions: ChartOptions = {
    responsive: true,

    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
  }

}
