import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements AfterViewInit {
  data = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: '', last: 'Larry the Bird', handle: '@twitter' }
  ];
  isEditing = false;

  chartData = {
    labels: ['Agregar', 'Eliminar', 'Actualización'],
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
    this.data.push({ id: this.data.length + 1, first: '', last: '', handle: '' });
    this.updateChart();
  }

  deleteRow(index: number) {
    this.data.splice(index, 1);
    this.updateChart();
  }

  updateChart() {
    let added = 0;
    let deleted = 0;
    let updated = 0;

    // Cálculo de los valores para la gráfica.
    for (const item of this.data) {
      if (item.id > this.chartData.datasets[0].data.length) {
        added++;
      } else if (item.id < 0) {
        deleted++;
      } else if (item.id > 0 && (item.first !== '' || item.last !== '' || item.handle !== '')) {
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