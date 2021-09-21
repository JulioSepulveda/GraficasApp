import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63'
      ]
    }
  ];

  constructor(private graficasService: GraficasService) { }

  /* LLamada a nuestro servicio para recuperar los datos de una petición HTTP */
  ngOnInit(): void {

    /* this.graficasService.getUserRedesSociales()
      .subscribe( data => {
        // Dividimos la respuesta en keys y values 
        const labels = Object.keys(data);
        const values = Object.values(data);
        
        // De esta forma metemos tanto los labels como los values del servicio en nuestra dona
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      }); */

    /* Mejor forma de realizar la llamada a la petición HTTP */
    this.graficasService.getUserRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
    

  }
}
