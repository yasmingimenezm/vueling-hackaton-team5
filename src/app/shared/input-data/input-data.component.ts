import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  constructor( private fb: FormBuilder,
    private dataService : DataService) { }

  dataForm = this.fb.group({
    shiftDuration: ['', Validators.required],
    hourlyCostHandling: ['', Validators.required],
    schedule: ['', Validators.required],
  })

  dataInput() {
    this.dataService.sendDataInput(this.dataForm.value);
  }

}
