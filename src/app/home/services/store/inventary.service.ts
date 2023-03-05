import { Injectable } from '@angular/core';
import { Cuero } from '../../models/strore_models/cuero';

@Injectable({
  providedIn: 'root'
})
export class InventaryDataService {

  data:Cuero[] = [
    { id: 1, name: 'Cuero cocido', color: 'negro', availableQuantity: 1, borrowedQuantity: 1100 },
    { id: 2, name: 'Cuero graso', color: 'rojo', availableQuantity: 1000, borrowedQuantity: 1100},
    { id: 3, name: 'Charol ', color: 'cafe', availableQuantity: 1000, borrowedQuantity: 1100 }
  ];

  constructor() { }

  getData(){
    return this.data
  }

  updateData(index: number, newData: {id: number, name:string,color: string, availableQuantity: number, borrowedQuantity: number}) {
    this.data[index] = newData;
  }
  
  deleteData(index: number) {
    this.data.splice(index, 1);
  }
}
