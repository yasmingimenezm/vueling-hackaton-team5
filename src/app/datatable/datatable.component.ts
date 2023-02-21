import { Observable } from 'rxjs';
import { DataService } from './../shared/core/data.service';
import { Component, OnInit } from '@angular/core';
import { IData } from '../shared/models/data.model';
import { ExcelService } from '../shared/core/excel.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit{
  public defaultData$?: Observable<IData[]>;
  public editEnabled: boolean = false;

  constructor(private data: DataService, private excelService: ExcelService){}

  ngOnInit(): void {
    this.defaultData$ = this.data.getData();
  }

  orderByHandling(handling: string){
    this.defaultData$ = this.data.filterDataByHandling(handling);
  }

  orderByCost(handling: string){
    this.defaultData$ = this.data.orderDataByCost(handling);
  }

  enableEdit() {
    this.editEnabled = true;
  }

  exportToExcel(data: IData[]) {
    this.excelService.exportAsExcelFile(data, 'handling_data');
  }  
}
