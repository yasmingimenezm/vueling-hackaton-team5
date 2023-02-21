import { Observable } from 'rxjs';
import { DataService } from './../shared/core/data.service';
import { Component, OnInit } from '@angular/core';
import { IData } from '../shared/models/data.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit{
  public defaultData$?: Observable<IData[]>;

  constructor(private data: DataService){}

  ngOnInit(): void {
    this.defaultData$ = this.data.getData();
  }

  orderByHandling(handling: string){
    this.defaultData$ = this.data.filterDataByHandling(handling);
  }

  orderByCost(handling: string){
    this.defaultData$ = this.data.orderDataByCost(handling);
  }


}
