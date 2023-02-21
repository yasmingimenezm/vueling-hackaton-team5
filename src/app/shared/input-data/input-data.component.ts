import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  constructor( private fb: FormBuilder) { }

  dataForm = this.fb.group({
    shiftDuration: ['', Validators.required],
    hourlyCostHandling: ['', Validators.required],
    schedule: ['', Validators.required],
  })

  dataInput() {
    console.log(this.dataForm.value);
  }

}
