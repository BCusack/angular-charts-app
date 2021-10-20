import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartAnimationOptions, ChartType } from 'chart.js';

import { Colors, Label } from 'ng2-charts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barChartData: ChartDataSets[] = [{ data: [30, 50, 50, 60, 50, 30, 50, 52, 52], label: 'Line', type: "line" },
  { data: [0, 65, 59, 80, 81, 56, 55, 40, 0], label: 'Series A' },
  { data: [0, 28, 48, 40, 19, 86, 27, 90, 0], label: 'Series B' },

  ];
  barChartLabels: Label[] = ['FirstPlaceholder', '2006', '2007', '2008', '2009', '2010', '2011', '2012', 'LastPlaceholder'];
  barChartOptions: ChartOptions = {
    responsive: true,
    showLines: true,

    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        ticks: {
          min: '2006',
          max: '2012',
        }
      }], yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

  };
  barChartColors: Colors[] = [
    {
      borderColor: '#F1BD65',
      backgroundColor: '#F1BD65',
    },
    {
      borderColor: '#A69DE4',
      backgroundColor: '#A69DE4',
    },
    {
      borderColor: '#fb99bc',
      backgroundColor: '#fb99bc',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;


  constructor() { }

  ngOnInit(): void {
  }

}
