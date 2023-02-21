

import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraphicsService } from './graphics.service';
import { DataService } from '../core/data.service';
import { filter, from, groupBy, map, mergeMap, reduce, take, toArray } from 'rxjs';
import { dataTable } from '../interfaces';


@Component({
  selector: 'app-infographycs',
  templateUrl: './infographycs.component.html',
  styleUrls: ['./infographycs.component.css']
})

export class InfographycsComponent implements OnInit {



  constructor(private graphicService : GraphicsService,
    private dataService : DataService) { }

jardinera : any[] = [];

  ngOnInit(): void {
  
    // this.graphicService.getUser()
    // .subscribe(({ labels, datasets }) => {
    //   // console.log(data);
    //   this.doughnutChartData = { labels, datasets };
    // });


    this.dataService.filterDataByHandling('jardinera')
    .subscribe((data : any) => {
      this.jardinera = data;
    })
   
  }
// Doughnut

doughnutChartData: ChartData<'doughnut'> = {

  labels: [],
  datasets: [
    { data: [],
      backgroundColor : ['#6405F0','#0724E3', '#05A0F0'] },
    
  ]
};
public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}



}