import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas-barra',
  templateUrl: './graficas-barra.component.html',
  styles: [
  ]
})
export class GraficasBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() public barChartLabels: Label[] = [
    //'2021', '2022', '2023', '2024', '2025', '2026', '2027'
  ];
  @Input() public barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#EB1CD5', hoverBackgroundColor: 'red' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#23DB1D', hoverBackgroundColor: 'red' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#F2B213', hoverBackgroundColor: 'red' }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  
  
  constructor() { }

  ngOnInit(): void {
    /* Con la propiedad horizontal recibida del padre podemos controlar si queremos poner una gráfica en horizontal o vertical */
    if ( this.horizontal ) {
      this.barChartType= 'horizontalBar';
    }
  }
}
