import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Cuero } from 'src/app/home/models/strore_models/cuero';
import { InventaryDataService } from 'src/app/home/services/store/inventary.service';


@Component({
  selector: 'app-graph-table',
  templateUrl: './graph-table.component.html',
  styleUrls: ['./graph-table.component.scss']
})
export class GraphTableComponent implements AfterViewInit, OnInit {
  data!: Cuero[];
  
  constructor(private readonly inventaryDataService: InventaryDataService) {}
  
  ngOnInit(): void {
    this.data = this.inventaryDataService.getData();
  }
  
  chartData = {
    labels: ['Disponible', 'Prestamo', 'Bajas'],
    datasets: [
      {
        label: 'Cambios de tabla',
        backgroundColor: [] as string[], // cambia aquí la declaración
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [0, 0, 0]
      }
    ]
  };
  
  @ViewChild('myChart') private chartRef!: ElementRef;
  private chart: Chart | undefined;
  
  ngAfterViewInit(): void {
    // generar colores aleatorios para cada objeto en el dataset
    const backgroundColors = this.generateRandomColors(this.chartData.datasets[0].data.length);
    this.chartData.datasets[0].backgroundColor = backgroundColors;
    
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: this.chartData
    });
  }
  
  generateRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      // generar color aleatorio en formato hexadecimal
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(randomColor);
    }
    return colors;
  }
  
  updateChart() {
    // Obtener los datos de cada objeto y generar un color aleatorio para cada uno.
    const newData = this.data.map(obj => {
      return {
        label: obj.name,
        data: [obj.availableQuantity, obj.borrowedQuantity],
        backgroundColor: this.generateRandomColor()
      };
    });
    
    // Actualizar los valores y colores de la gráfica.
    this.chartData.datasets = [
      { 
        label: 'Cambios de tabla',
        backgroundColor: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [0, 0, 0]
      }
    ];
    
    newData.forEach(obj => {
      this.chartData.datasets[0].data = this.chartData.datasets[0].data.map((val, i) => val + obj.data[i]);
      this.chartData.datasets[0].backgroundColor.push(obj.backgroundColor);
    });
    
    // Actualizar la gráfica.
    this.chart?.update();
  }
  
  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}