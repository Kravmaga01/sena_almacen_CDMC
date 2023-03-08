import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Cuero } from 'src/app/home/models/strore_models/cuero';
import { InventaryDataService } from '../../services/store/inventary.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements  OnInit {
  data: Cuero[] = [];
  constructor(private readonly inventoryData: InventaryDataService) {
   
  }
  ngOnInit(): void {
    this.data = this.inventoryData.getData();
  }
  isEditing:boolean = false;
  

  showChart:boolean = false;

  toggleChart() {
    this.showChart = !this.showChart;
  }

  editTable() {
    this.isEditing = true;
  }

  saveTable() {
    this.isEditing = false;
    // Aquí puedes agregar la lógica para guardar los datos en algún servicio o API.
    
  }

  addRow() {
    this.data.push({ id: this.data.length + 1, name: '', color: '',  availableQuantity: 0,borrowedQuantity:0 });
   
  }

  deleteRow(index: number) {
    this.inventoryData.deleteData(index);
    
  }
  
  
}
