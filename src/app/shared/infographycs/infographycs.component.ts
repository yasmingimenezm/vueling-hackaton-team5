

import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { DataService } from '../core/data.service';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-infographycs',
  templateUrl: './infographycs.component.html',
  styleUrls: ['./infographycs.component.css']
})

export class InfographycsComponent implements OnInit {



  constructor( private dataService: DataService ) { }

  data: any[] = [];

  postObservables = [
    this.dataService.filterDataByHandling('jardinera'),
    this.dataService.filterDataByHandling('equipamientos'),
    this.dataService.filterDataByHandling('coordinacion')
  ];
  ngOnInit(): void {

    // this.graphicService.getUser()
    // .subscribe(({ labels, datasets }) => {
    //   // console.log(data);
    //   this.doughnutChartData = { labels, datasets };
    // });

    this.dataService.getData()
      .subscribe((data: any) => {

      })

    forkJoin(this.postObservables).subscribe((data: any) => {
      this.data = data;
      this.doughnutChartData = { labels: ['jardinera', 'equipamientos', 'coordinacion'], datasets: [{ data: [this.data[0].length, this.data[1].length, this.data[2].length], backgroundColor: ['#FFCC00', '#4D4D4D', '#000'] }] };
      console.log(data);
    })


  }
  // Doughnut

  doughnutChartData: ChartData<'doughnut'> = {

    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#6405F0', '#0724E3', '#05A0F0']
      },

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