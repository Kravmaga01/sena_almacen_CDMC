import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Cuero } from 'src/app/home/models/strore_models/cuero';
import { InventaryDataService } from '../../../../services/store/inventary.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements AfterViewInit, OnInit {
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

  chartData = {
    labels: [' disponible', 'Prestamo', 'Bajas'],
    datasets: [
      {
        label: 'Cambios de tabla',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [0, 0, 0]
      }
    ]
  };


  @ViewChild('myChart') private chartRef!: ElementRef;
  private chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: this.chartData
    });
  }

  editTable() {
    this.isEditing = true;
  }

  saveTable() {
    this.isEditing = false;
    // Aquí puedes agregar la lógica para guardar los datos en algún servicio o API.
    this.updateChart();
  }

  addRow() {
    this.data.push({ id: this.data.length + 1, name: '', color: '',  availableQuantity: 0,borrowedQuantity:0 });
    this.updateChart();
  }

  deleteRow(index: number) {
    this.inventoryData.deleteData(index);
    this.updateChart();
  }

  updateChart() {
    let added = 0 ;
    let deleted = 0;
    let updated = 0;
  
    // Cálculo de los valores para la gráfica.
    for (const item of this.data) {
      if (item.id > this.chartData.datasets[0].data.length) {
        added++;
      } else if (!this.chartData.datasets[0].data[item.id - 1]) {
        deleted++;
      } else if (item.name !== '' || item.color !== '' || item.availableQuantity !== 0  || item.borrowedQuantity!== 0) {
        updated++;
      }
    }
  
    // Actualización de los valores de la gráfica.
    this.chartData.datasets[0].data[0] = added;
    this.chartData.datasets[0].data[1] = deleted;
    this.chartData.datasets[0].data[2] = updated;
    this.chart?.update();
  }
}
