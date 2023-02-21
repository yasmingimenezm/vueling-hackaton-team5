import { Component } from '@angular/core';
import {parse} from 'json2csv';


@Component({
  selector: 'app-json2csv',
  templateUrl: './json2csv.component.html',
  styleUrls: ['./json2csv.component.css']
})
export class Json2csvComponent {

  convertJSONtoCSV(data: any[], fields: string[]) {
    const csv = parse(data, { fields });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}


//Llama a la función convertJSONtoCSV con los datos JSON que quieras convertir y los campos que quieras incluir en el archivo CSV:
const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'San Francisco' },
  { name: 'Bob', age: 40, city: 'Chicago' }
];
const fields = ['name', 'age', 'city'];
convertJSONtoCSV(data, fields);

//La función convertJSONtoCSV convierte los datos JSON y los campos a un archivo CSV y lo abre en una nueva pestaña del navegador.Si prefieres descargar el archivo CSV en lugar de abrirlo en una nueva pestaña, puedes cambiar window.open(url) por FileSaver.saveAs(blob, 'filename.csv') y agregar la librería file-saver a tu proyecto de Angular.
function convertJSONtoCSV(data: { name: string; age: number; city: string; }[], fields: string[]) {
  throw new Error('Function not implemented.');
}
